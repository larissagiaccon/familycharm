import {
    ActionTypes,
    IAddProductReviewRequest,
    ILoadProductDataRequest,
    ILoadReviewsRequest,
    IProductFreightCalculationRequest,
    IProductProps,
    IReviewProps,
    IShippingProps
} from './types'

export function loadProductData({ sku }: ILoadProductDataRequest) {
    return {
        type: ActionTypes.loadProductData,
        payload: { sku }
    }
}

export function updateProductData(product: IProductProps) {
    return {
        type: ActionTypes.updateProductData,
        payload: {
            product
        }
    }
}

export function loadProductReviews({
    productId,
    page,
    quantity
}: ILoadReviewsRequest) {
    return {
        type: ActionTypes.loadProductReviews,
        payload: {
            productId,
            page,
            quantity
        }
    }
}

type IUpdateProductReviewsProps = {
    reviews: Array<IReviewProps>
    productId: number
}

export function updateProductReviews({
    reviews,
    productId
}: IUpdateProductReviewsProps) {
    return {
        type: ActionTypes.updateProductReviews,
        payload: {
            reviews,
            productId
        }
    }
}

export function addProductReview({
    productId,
    evaluation,
    comment,
    recommends,
    title
}: IAddProductReviewRequest) {
    return {
        type: ActionTypes.addProductReview,
        payload: {
            productId,
            evaluation,
            comment,
            recommends,
            title
        }
    }
}

export function productFreightCalculation({
    sku,
    zipCode,
    quantity
}: IProductFreightCalculationRequest) {
    return {
        type: ActionTypes.productFreightCalculation,
        payload: {
            sku,
            zipCode,
            quantity
        }
    }
}

export function updateProductFreightCalculation(options: IShippingProps[]) {
    return {
        type: ActionTypes.updateProductFreightCalculation,
        payload: {
            options
        }
    }
}
