import produce from 'immer'
import { AnyAction, Reducer } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'

import {
    ActionTypes,
    ICartProps,
    ICartState,
    IFreightListProps,
    IPaymentOptionsProps,
    IPurchaseOrderDataProps,
    IPurchaseOrderProps
} from './types'

const INITIAL_STATE: ICartState = {
    cart: {} as ICartProps,
    freight: {} as IFreightListProps,
    othersProducts: [],
    paymentOptions: {} as IPaymentOptionsProps,
    purchaseOrder: {} as IPurchaseOrderProps,
    purchaseOrderData: {} as IPurchaseOrderDataProps,
    showMiniCart: false
}

const cart: Reducer<ICartState> = (
    state = INITIAL_STATE,
    action: AnyAction
) => {
    return produce(state, draft => {
        switch (action.type) {
            case HYDRATE: {
                const nextState = { ...draft, ...action.payload.cart }

                if (Object.keys(state.cart).length) nextState.cart = state.cart

                return nextState
            }

            case ActionTypes.closeMiniCart: {
                return { ...draft, showMiniCart: false }
            }

            case ActionTypes.updateCartData: {
                // eslint-disable-next-line no-shadow
                const { cart, showMiniCart } = action.payload
                return {
                    ...draft,
                    cart,
                    showMiniCart
                }
            }

            case ActionTypes.cleanCartData: {
                // eslint-disable-next-line no-shadow
                const { showMiniCart } = action.payload
                return {
                    ...draft,
                    showMiniCart
                }
            }

            case ActionTypes.updateOthersProducts: {
                const { othersProducts } = action.payload
                return {
                    ...draft,
                    othersProducts
                }
            }

            case ActionTypes.updateFreightData: {
                return {
                    ...draft,
                    freight: action.payload.freightData
                }
            }

            case ActionTypes.updatePaymentOptions: {
                return {
                    ...draft,
                    paymentOptions: action.payload.paymentOptions
                }
            }

            case ActionTypes.updatePurchaseOrder: {
                return {
                    ...draft,
                    purchaseOrder: action.payload.purchaseOrder
                }
            }

            case ActionTypes.updatePurchaseOrderData: {
                return {
                    ...draft,
                    purchaseOrderData: action.payload.purchaseOrderData
                }
            }

            case ActionTypes.cleanPurchaseOrderData: {
                return {
                    ...draft,
                    purchaseOrder: {} as IPurchaseOrderProps,
                    purchaseOrderData: {} as IPurchaseOrderDataProps
                }
            }

            case ActionTypes.cleanCheckout: {
                return {
                    ...draft,
                    cart: {} as ICartProps
                }
            }

            default: {
                return draft
            }
        }
    })
}

export default cart
