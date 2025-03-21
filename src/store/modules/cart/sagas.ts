import Cookies from 'js-cookie'
import { AxiosResponse } from 'axios'
import { all, takeLatest, call, put, takeEvery } from 'redux-saga/effects'

import api from 'services/api'
import UF from 'utils/getUF'
import {
    GAEvent,
    getGAAddPaymentParams,
    getGAAddShippingParams,
    getGAPurchaseParams,
    getPageView
} from 'utils/gtag'

import { IUserProps } from '../profile/types'
import { IProductCarouselProps } from '../product/types'
import { updateUserSessionData } from '../profile/actions'
import { setPorcentagem, setRedirect } from '../config/actions'
import {
    addDiscountCoupon,
    addProductToCart,
    cartRecovery,
    checkoutStart,
    cleanCartData,
    freightCalculation,
    loadCartData,
    loadPurchaseOrderData,
    selectFreightOption,
    selectShippingAddress,
    sendPurchaseOrder,
    updateCartData,
    updateFreight,
    updateOthersProducts,
    updatePaymentOptions,
    updatePurchaseOrder,
    updatePurchaseOrderData,
    updateQuantityOfProductInCart
} from './actions'
import {
    ActionTypes,
    ICartProps,
    IFreightCalculationResponse,
    IPaymentOptionsProps,
    IPurchaseOrderDataProps,
    IPurchaseOrderProps
} from './types'
import { cart } from 'mocks'

type IAddDiscountCouponRequest = ReturnType<typeof addDiscountCoupon>
type IAddProductToCartRequest = ReturnType<typeof addProductToCart>
type ICartRecoveryRequest = ReturnType<typeof cartRecovery>
type ICleanCartDataRequest = ReturnType<typeof cleanCartData>
type IFreightCalculationRequest = ReturnType<typeof freightCalculation>
type ILoadCartDataRequest = ReturnType<typeof loadCartData>
type ILoadPurchaseOrderDataRequest = ReturnType<typeof loadPurchaseOrderData>
type ISelectFreightOptionReques = ReturnType<typeof selectFreightOption>
type ISelectShippingAddressRequest = ReturnType<typeof selectShippingAddress>
type ISendPurchaseOrderRequest = ReturnType<typeof sendPurchaseOrder>
type IUpdateQuantityOfProductInCartRequest = ReturnType<
    typeof updateQuantityOfProductInCart
>

function* loadCartDataRequest({ payload }: ILoadCartDataRequest) {
    try {
        const { showMiniCart } = payload
        // const response: AxiosResponse<ICartProps> = yield call(
        //     api.get,
        //     `carrinho`
        // )

        const response = {
            data: cart,
            headers: {
                ['x-uf']: 'Sp',
                ['x-porcentagem']: '20'
            }
        }

        api.defaults.headers['x-uf'] = response.data.endereco.uf
        const uf = UF.find(item => item.value === response.data.endereco.uf)
        Cookies.set('@FlordoDeserto:cookies:uf', JSON.stringify(uf))

        yield put(
            updateCartData({
                cart: response.data,
                showMiniCart
            })
        )

        const percent = response.headers['x-porcentagem']

        yield put(setPorcentagem(percent))
    } catch (err) {}
}

function* loadOthersProductsCartRequest() {
    try {
        const response: AxiosResponse<Array<IProductCarouselProps>> =
            yield call(api.get, 'vitrine/carrinho')

        // @ts-ignore
        yield put(updateOthersProducts({ othersProducts: response.data }))
    } catch (err) {}
}

function* addProductToCartRequest({ payload }: IAddProductToCartRequest) {
    try {
        const { sku, quantity, showAfterRequest, GA, componenteVitrineId } =
            payload

        const campanha = Cookies.get('@FlordoDeserto:campanha')

        const response = yield call(api.post, 'carrinho/adicionar', {
            sku,
            quantidade: quantity,
            componenteVitrineId,
            promocaoIdGA4: campanha ? JSON.parse(campanha).promotionId : null
        })

        GAEvent({ action: 'add_to_cart', data: GA })
        GAEvent({ action: 'page_view', data: getPageView() })

        yield put(loadCartData({ showMiniCart: showAfterRequest }))
    } catch (err) {}
}

function* updateQuantityOfProductInCartRequest({
    payload
}: IUpdateQuantityOfProductInCartRequest) {
    try {
        const { sku, quantity, showAfterRequest, GA } = payload

        yield call(api.post, 'carrinho/atualizar', {
            sku,
            quantidade: quantity
        })

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore:next-line
        if (GA.ga_type) {
            GAEvent({ action: 'remove_from_cart', data: GA })
        } else GAEvent({ action: 'add_to_cart', data: GA })

        yield put(loadCartData({ showMiniCart: showAfterRequest }))
    } catch (err) {}
}

function* cleanCartDataRequest({ payload }: ICleanCartDataRequest) {
    try {
        const { GA } = payload

        yield call(api.post, 'carrinho/limpar-itens')

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore:next-line
        GAEvent({ action: 'remove_from_cart', data: GA })

        yield put(loadCartData({ showMiniCart: true }))
    } catch (err) {}
}

function* freightCalculationRequest({ payload }: IFreightCalculationRequest) {
    try {
        const { zipCode } = payload
        const { data }: AxiosResponse<IFreightCalculationResponse> = yield call(
            api.get,
            `carrinho/calcular-frete/${zipCode}`
        )

        yield put(updateFreight(data))
    } catch (err) {}
}

function* addDiscountCouponRequest({ payload }: IAddDiscountCouponRequest) {
    try {
        const { coupon } = payload
        const { data } = yield call(
            api.post,
            `carrinho/aplicar-cupom/${coupon}`
        )

        if (data.sucesso) {
            yield put(loadCartData({ showMiniCart: false }))
        }
    } catch (err) {}
}

function* removeDiscountCouponRequest() {
    try {
        const { data } = yield call(api.post, 'carrinho/remover-cupom')

        if (data.sucesso) {
            yield put(loadCartData({ showMiniCart: false }))
        }
    } catch (err) {}
}

function* checkoutStartRequest() {
    try {
        const response: AxiosResponse<ICartProps> = yield call(
            api.post,
            'checkout/iniciar',
            null,
            {
                params: {
                    selecionarMenorModal: true,
                    recalcularFrete: true
                }
            }
        )
        api.defaults.headers['x-uf'] = response.data.endereco.uf

        const uf = UF.find(item => item.value === response.data.endereco.uf)

        Cookies.set('@FlordoDeserto:cookies:uf', JSON.stringify(uf))

        if (response?.data?.entrega?.codigo)
            GAEvent({
                action: 'add_shipping_info',
                data: getGAAddShippingParams({
                    subtotalComDesconto: response.data.subtotalComDesconto,
                    itens: response.data.itens,
                    shippingTier: response.data.entrega.codigo
                })
            })

        GAEvent({
            action: 'add_shipping_info',
            data: getGAAddShippingParams({
                subtotalComDesconto: response.data.subtotalComDesconto,
                itens: response.data.itens,
                shippingTier: response.data.entrega.codigo
            })
        })

        yield put(updateCartData({ cart: response.data }))
    } catch (err) {}
}

function* loadPaymentOptionsRequest() {
    try {
        const response: AxiosResponse<IPaymentOptionsProps> = yield call(
            api.get,
            'checkout/pagamento'
        )

        yield put(updatePaymentOptions(response.data))
    } catch (err) {}
}

function* selectFreightOptionRequest({ payload }: ISelectFreightOptionReques) {
    try {
        const { code, subtotalComDesconto, itens } = payload
        const { data } = yield call(api.post, 'checkout/selecionar-entrega', {
            codigo: code
        })

        GAEvent({
            action: 'add_shipping_info',
            data: getGAAddShippingParams({
                subtotalComDesconto,
                itens,
                shippingTier: code
            })
        })

        if (data.sucesso) {
            yield put(loadCartData({ showMiniCart: false }))
        }
    } catch (err) {}
}

function* sendPurchaseOrderRequest({ payload }: ISendPurchaseOrderRequest) {
    try {
        const { cartao, codigoCliente, formaPagamento, parcela } =
            payload.purchaseOrder

        yield call(() =>
            GAEvent({
                action: 'add_payment_info',
                data: getGAAddPaymentParams({
                    paymentDetail: payload.purchaseOrder
                })
            })
        )

        const response: AxiosResponse<IPurchaseOrderProps> = yield call(
            api.post,
            'checkout/pedido',
            {
                formaPagamento,
                parcela,
                cartao,
                codigoCliente
            }
        )

        const campanha = Cookies.get('@FlordoDeserto:campanha')

        yield call(() =>
            GAEvent({
                action: 'purchase',
                data: getGAPurchaseParams({
                    codigoTransacao: response.data.numeroPedido,
                    purchaseOrder: payload.purchaseOrder,
                    campanha: campanha ? JSON.parse(campanha) : null
                })
            })
        )

        GAEvent({ action: 'page_view', data: getPageView() })

        yield put(
            updatePurchaseOrder({
                codigoTransacao: response.data.codigoTransacao,
                numeroPedido: response.data.numeroPedido,
                pedidoId: response.data.pedidoId,
                redirecionarUrl: response.data.redirecionarUrl,
                retornarCarrinho: response.data.retornarCarrinho
            })
        )
    } catch (err) {}
}

function* selectShippingAddresRequest({
    payload
}: ISelectShippingAddressRequest) {
    try {
        const { addressId } = payload

        yield call(api.post, `checkout/selecionar-endereco/${addressId}`)

        // yield put(cleanCheckout());

        yield put(checkoutStart())
        // yield put(loadAddressList());
    } catch (err) {}
}

function* loadPurchaseOrderDataRequest({
    payload
}: ILoadPurchaseOrderDataRequest) {
    try {
        const { purchaseOrderTransaction } = payload

        const response: AxiosResponse<IPurchaseOrderDataProps> = yield call(
            api.get,
            `cliente/pedido/${purchaseOrderTransaction}`
        )
        yield put(updatePurchaseOrderData(response.data))
    } catch (err) {}
}

function* cartRecoveryRequest({ payload }: ICartRecoveryRequest) {
    try {
        const { cartId, clientCode } = payload

        const response: AxiosResponse<IUserProps> = yield call(
            api.post,
            'carrinho/recuperar',
            {
                carrinhoId: cartId,
                codigoCliente: clientCode
            }
        )
        if (response.data) {
            yield put(
                setRedirect({ redirect: true, path: '/checkout/carrinho' })
            )
            yield put(updateUserSessionData(response.data))
        } else {
            yield put(setRedirect({ redirect: true, path: '/identificacao' }))
        }
    } catch (err) {
        yield put(setRedirect({ redirect: true, path: '/identificacao' }))
    }
}

export default all([
    takeEvery(ActionTypes.cleanCartData, cleanCartDataRequest),
    takeEvery(ActionTypes.freightCalculation, freightCalculationRequest),
    takeLatest(ActionTypes.addDiscountCoupon, addDiscountCouponRequest),
    takeLatest(ActionTypes.addProductToCart, addProductToCartRequest),
    takeLatest(ActionTypes.cartRecovery, cartRecoveryRequest),
    takeLatest(ActionTypes.checkoutStart, checkoutStartRequest),
    takeLatest(ActionTypes.loadCartData, loadCartDataRequest),
    takeLatest(
        ActionTypes.loadOthersProductsCart,
        loadOthersProductsCartRequest
    ),
    takeLatest(ActionTypes.loadPaymentOptions, loadPaymentOptionsRequest),
    takeLatest(ActionTypes.loadPurchaseOrderData, loadPurchaseOrderDataRequest),
    takeLatest(ActionTypes.removeDiscountCoupon, removeDiscountCouponRequest),
    takeLatest(ActionTypes.selectFreightOption, selectFreightOptionRequest),
    takeLatest(ActionTypes.selectShippingAddress, selectShippingAddresRequest),
    takeLatest(ActionTypes.sendPurchaseOrder, sendPurchaseOrderRequest),
    takeLatest(
        ActionTypes.updateQuantityOfProductInCart,
        updateQuantityOfProductInCartRequest
    )
])
