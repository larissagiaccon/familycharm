import Cookies from 'js-cookie'

import { ICartProps } from 'store/modules/cart'
import { IUserProps } from 'store/modules/profile'

import {
    IProductCartItem,
    IPurchaseOrderDataProps,
    ISendPurchaseOrder
} from '../store/modules/cart/types'
import {
    IProductProps,
    IProductCarouselProps,
    IProductPropsPDP
} from '../store/modules/product/types'

declare global {
    interface Window {
        gtag: any
        dataLayer: any
    }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const GAEvent = ({ action, data }) => {
    // eslint-disable-next-line
    delete data.ga_type // ga_type é utilizado para auxiliar nos eventos de add e remove do carrinho

    if (window.dataLayer) {
        const userCookies = Cookies.get('@FlordoDeserto:user')

        const parsedUserCookies: IUserProps = userCookies
            ? JSON.parse(userCookies)
            : undefined

        window.dataLayer.push({
            event: action,
            ecommerce: data,
            _clear: true,
            userId: parsedUserCookies?.id
        })

        if (window.gtag) {
            window.gtag('event', action, data)
        }
    }

    if (window.gtag) {
        window.gtag('event', action, data)
    }
}

type ICampanhaProps = {
    promotionId: string
    promotionName: string
    creative_name: string
    creative_slot: string
    itemListName?: string
}

interface IGAViewPromotion {
    campanha: ICampanhaProps
    product: any
    index: number
}

export const getGAViewPromotion = ({
    campanha,
    product,
    index
}: IGAViewPromotion) => {
    return {
        promotion_id: campanha.promotionId,
        promotion_name: campanha.promotionName,
        creative_name: campanha.creative_name,
        creative_slot: campanha.creative_slot,
        items: [
            {
                item_id: product.codigo,
                item_name: product.nome,
                item_category:
                    product?.categoria?.nomeHierarquia || product.categoria,
                item_brand: product?.marca?.nome || product.marca,
                price: product.precoPor,
                item_list_name: campanha.itemListName,
                index: index + 1
            }
        ]
    }
}

interface IGASelectPromotionDetailProps {
    campanha: ICampanhaProps
    product: IProductProps
}

export const getGASelectPromotionDetail = ({
    campanha,
    product
}: IGASelectPromotionDetailProps) => {
    return {
        promotion_id: campanha.promotionId,
        promotion_name: campanha.promotionName,
        creative_name: campanha.creative_name,
        creative_slot: campanha.creative_slot,
        items: [
            {
                item_id: product.codigo,
                item_name: product.nome,
                price: product.precoPor,
                item_category:
                    product?.categoria?.nomeHierarquia || product.categoria,
                item_brand: product?.marca?.nome || product.marca,
                item_list_name: campanha.itemListName,
                index: 1
            }
        ]
    }
}

interface IGAViewItemsHomeListProps {
    products: Array<any>
    itemListId?: string | number
    itemListName?: string
}

export const getGAViewItemsHomeList = ({
    products,
    itemListId,
    itemListName
}: IGAViewItemsHomeListProps) => {
    return {
        item_list_id: itemListId,
        item_list_name: itemListName,
        items: products.map((product, index) => {
            return {
                item_id: product.codigo,
                item_name: product.nome,
                item_category:
                    product?.categoria?.nomeHierarquia || product.categoria,
                item_brand: product?.marca?.nome || product.marca,
                price: product.precoPor,
                item_list_name: itemListName,
                index: index + 1
            }
        })
    }
}

interface IGASelectItemProps {
    product: IProductProps
    itemListId?: string | number
    itemListName?: string
}

export const getGASelectItem = ({
    product,
    itemListId,
    itemListName
}: IGASelectItemProps) => {
    return {
        item_list_id: itemListId,
        item_list_name: itemListName,
        items: [
            {
                item_id: product.codigo,
                item_name: product.nome,
                item_category:
                    product?.categoria?.nomeHierarquia || product.categoria,
                item_brand: product?.marca?.nome || product.marca,
                price: product.precoPor,
                item_list_name: itemListName,
                index: 1
            }
        ]
    }
}

export const getPageView = () => {
    const userCookies = Cookies.get('@FlordoDeserto:user')

    const parsedUserCookies: IUserProps = userCookies
        ? JSON.parse(userCookies)
        : undefined

    return {
        send_to: 'AW-11141069111',
        user_id: parsedUserCookies?.id
    }
}

interface IGACartItemsProps {
    product: any
    qty: number
    remove?: boolean
}

export const getGACartItemsParams = ({
    product,
    qty,
    remove = false
}: IGACartItemsProps) => {
    return {
        currency: 'BRL',
        value: Number(product?.preco?.precoPor || product.precoPor) * qty,
        ga_type: remove,
        items: [
            {
                item_id: product.codigo,
                item_name: product.nome,
                item_category:
                    product?.categoria?.nomeHierarquia || product.categoria,
                item_brand: product?.marca?.nome || product.marca,
                price: product?.preco?.precoPor || product?.precoPor,
                quantity: qty
            }
        ]
    }
}

interface IGACartProps {
    cart: ICartProps
}

export const getGACartParams = ({ cart }: IGACartProps) => {
    return {
        currency: 'BRL',
        value: cart.total,
        items: cart.itens.map(product => {
            return {
                item_id: product.codigo,
                item_name: product.nome,
                item_category: product.categoria,
                item_brand: product.marca,
                price: product?.precoPor,
                quantity: product.quantidade
            }
        })
    }
}

export const getGAInitCheckoutParams = ({ cart }: IGACartProps) => {
    return {
        currency: 'BRL',
        value: cart.total,
        items: cart.itens.map(product => {
            return {
                item_id: product.codigo,
                item_name: product.nome,
                item_category: product.categoria,
                item_brand: product.marca,
                price: product?.precoPor,
                quantity: product.quantidade
            }
        })
    }
}

interface IGAPaymentsProps {
    paymentDetail: ISendPurchaseOrder
}

export const getGAAddPaymentParams = ({ paymentDetail }: IGAPaymentsProps) => {
    return {
        currency: 'BRL',
        sign_upcurrency: '',
        payment_type: paymentDetail.formaPagamento,
        coupon: '',
        value: paymentDetail.cart.total,
        items: paymentDetail.cart.itens.map(product => {
            return {
                item_id: product.codigo,
                item_name: product.nome,
                item_category: product.categoria,
                item_brand: product.marca,
                price: product?.precoPor,
                quantity: product.quantidade
            }
        })
    }
}

interface IGAShippingProps {
    subtotalComDesconto: number
    itens: IProductCartItem[]
    shippingTier: string
}

export const getGAAddShippingParams = ({
    subtotalComDesconto,
    itens,
    shippingTier
}: IGAShippingProps) => {
    return {
        currency: 'BRL',
        shipping_tier: shippingTier,
        coupon: '',
        value: subtotalComDesconto,
        items: itens.map(product => {
            return {
                item_id: product.codigo,
                item_name: product.nome,
                item_category: product.categoria,
                item_brand: product.marca,
                price: product?.precoPor,
                quantity: product.quantidade
            }
        })
    }
}

interface IGAPurchaseProps {
    codigoTransacao: string
    purchaseOrder: ISendPurchaseOrder
    campanha: ICampanhaProps
}

export const getGAPurchaseParams = ({
    codigoTransacao,
    purchaseOrder,
    campanha
}: IGAPurchaseProps) => {
    return {
        currency: 'BRL',
        affiliation: 'Flor do Deserto',
        transaction_id: codigoTransacao,
        coupon: '',
        shipping: purchaseOrder.cart.frete,
        tax: 0,
        value: purchaseOrder.cart.total,
        items: purchaseOrder.cart.itens.map(product => {
            return {
                affiliation: 'Flor do Deserto',
                item_id: product.codigo,
                item_name: product.nome,
                item_category: product.categoria,
                item_brand: product.marca,
                price: product?.precoPor,
                quantity: product.quantidade,
                promotion_id: product.promocaoIdGA4 || '',
                promotion_name: campanha ? campanha?.promotionName : ''
            }
        })
    }
}

interface IGAViewItemDetailProps {
    product: IProductProps
    itemListName: string
}

export const getGAViewItemDetail = ({
    product,
    itemListName
}: IGAViewItemDetailProps) => {
    return {
        currency: 'BRL',
        value: product.precoPor,
        items: [
            {
                item_id: product.codigo,
                item_name: product.nome,
                item_category:
                    product?.categoria?.nomeHierarquia || product.categoria,
                item_brand: product?.marca?.nome || product.marca,
                price: product.precoPor,
                item_list_name: itemListName,
                index: 1
            }
        ]
    }
}

interface IGAViewItemsProductCarouselProps {
    products: Array<IProductCarouselProps>
    itemListId: string | number
    itemListName?: string
}

export const getGAViewItemsFromProductCarousel = ({
    products,
    itemListId,
    itemListName
}: IGAViewItemsProductCarouselProps) => {
    return {
        item_list_id: itemListId,
        item_list_name: itemListName,
        items: products.map((product, index) => {
            return {
                item_id: product.codigo,
                item_name: product.nome,
                item_category: product.categoria,
                item_brand: product.marca,
                price: product.precoPor,
                item_list_name: itemListName,
                index: index + 1
            }
        })
    }
}

interface IGAViewItemsProductPDPProps {
    products: Array<IProductPropsPDP>
    itemListId: string | number
    itemListName: string
}

export const getGAViewItemsFromProductPDP = ({
    products,
    itemListId,
    itemListName
}: IGAViewItemsProductPDPProps) => {
    return {
        item_list_id: itemListId,
        item_list_name: itemListName,
        items: products.map((product, index) => {
            return {
                item_id: product.codigo,
                item_name: product.nome,
                price: product.precoPor,
                index: index + 1
            }
        })
    }
}
