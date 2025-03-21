import {
    ActionTypes,
    ICartRecoveryProps,
    IFreightListProps,
    IPaymentOptionsProps,
    IProductCartItem,
    IPurchaseOrderDataProps,
    IPurchaseOrderProps,
    ISendPurchaseOrder,
    IUpdateCartData
} from './types'

export interface ICleanCartData {
    GA?: object
}

export function cleanCartData({ GA }: ICleanCartData) {
    return {
        type: ActionTypes.cleanCartData,
        payload: {
            GA
        }
    }
}

export function updateQuantityOfProductInCart({
    sku,
    quantity,
    showAfterRequest,
    GA
}: IAddProductToCart) {
    return {
        type: ActionTypes.updateQuantityOfProductInCart,
        payload: {
            sku,
            quantity,
            showAfterRequest,
            GA
        }
    }
}

export interface IAddProductToCart {
    sku: string
    quantity: number
    showAfterRequest: boolean
    GA?: object
}

export function addProductToCart({
    sku,
    quantity,
    showAfterRequest,
    GA
}: IAddProductToCart) {
    return {
        type: ActionTypes.addProductToCart,
        payload: {
            sku,
            quantity,
            showAfterRequest,
            GA
        }
    }
}

interface ILoadCartData {
    showMiniCart?: boolean
}

export function loadCartData({ showMiniCart }: ILoadCartData) {
    return {
        type: ActionTypes.loadCartData,
        payload: {
            showMiniCart
        }
    }
}

export function closeMiniCart() {
    return {
        type: ActionTypes.closeMiniCart,
        payload: {}
    }
}

export function loadOthersProductsCart() {
    return {
        type: ActionTypes.loadOthersProductsCart,
        payload: {}
    }
}

export function updateOthersProducts({
    othersProducts
}: Omit<IUpdateCartData, 'cart' | 'showMiniCart'>) {
    return {
        type: ActionTypes.updateOthersProducts,
        payload: {
            othersProducts
        }
    }
}

export function updateCartData({ cart, showMiniCart }: IUpdateCartData) {
    return {
        type: ActionTypes.updateCartData,
        payload: {
            cart,
            showMiniCart
        }
    }
}

export function freightCalculation(zipCode: string) {
    return {
        type: ActionTypes.freightCalculation,
        payload: {
            zipCode
        }
    }
}

export function updateFreight(freightData: IFreightListProps) {
    return {
        type: ActionTypes.updateFreightData,
        payload: {
            freightData
        }
    }
}

export function addDiscountCoupon(coupon: string) {
    return {
        type: ActionTypes.addDiscountCoupon,
        payload: {
            coupon
        }
    }
}

export function removeDiscountCoupon() {
    return {
        type: ActionTypes.removeDiscountCoupon,
        payload: {}
    }
}

export function checkoutStart() {
    return {
        type: ActionTypes.checkoutStart,
        payload: {}
    }
}

export function selectFreightOption(
    code: string,
    subtotalComDesconto: number,
    codigoCupom: string,
    itens: IProductCartItem[]
) {
    return {
        type: ActionTypes.selectFreightOption,
        payload: {
            code,
            subtotalComDesconto,
            codigoCupom,
            itens
        }
    }
}

export function updatePaymentOptions(paymentOptions: IPaymentOptionsProps) {
    return {
        type: ActionTypes.updatePaymentOptions,
        payload: { paymentOptions }
    }
}

export function loadPaymentOptions() {
    return {
        type: ActionTypes.loadPaymentOptions,
        payload: {}
    }
}

export function sendPurchaseOrder(purchaseOrder: ISendPurchaseOrder) {
    return {
        type: ActionTypes.sendPurchaseOrder,
        payload: {
            purchaseOrder
        }
    }
}

export function selectShippingAddress(addressId: number) {
    return {
        type: ActionTypes.selectShippingAddress,
        payload: {
            addressId
        }
    }
}

export function updatePurchaseOrder(purchaseOrder: IPurchaseOrderProps) {
    return {
        type: ActionTypes.updatePurchaseOrder,
        payload: {
            purchaseOrder
        }
    }
}

export function loadPurchaseOrderData(purchaseOrderTransaction: string) {
    return {
        type: ActionTypes.loadPurchaseOrderData,
        payload: {
            purchaseOrderTransaction
        }
    }
}

export function updatePurchaseOrderData(
    purchaseOrderData: IPurchaseOrderDataProps
) {
    return {
        type: ActionTypes.updatePurchaseOrderData,
        payload: {
            purchaseOrderData
        }
    }
}

export function cleanPurchaseOrderData() {
    return {
        type: ActionTypes.cleanPurchaseOrderData,
        payload: {}
    }
}

export function cleanCheckout() {
    return {
        type: ActionTypes.cleanCheckout,
        payload: {}
    }
}

export function cartRecovery({ cartId, clientCode }: ICartRecoveryProps) {
    return {
        type: ActionTypes.cartRecovery,
        payload: {
            cartId,
            clientCode
        }
    }
}
