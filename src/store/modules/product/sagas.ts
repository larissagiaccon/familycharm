import { AxiosResponse } from 'axios'
import { all, takeLatest, call, put } from 'redux-saga/effects'

import api from 'services/api'

import {
    addProductReview,
    loadProductData,
    loadProductReviews,
    productFreightCalculation,
    updateProductData,
    updateProductFreightCalculation,
    updateProductReviews
} from './actions'
import { ActionTypes, IProductProps, IReviewProps } from './types'
import { product } from 'mocks'

type ILoadProductDataRequest = ReturnType<typeof loadProductData>
type ILoadProductReviewsRequest = ReturnType<typeof loadProductReviews>
type IAddProductReviewRequest = ReturnType<typeof addProductReview>
type IProductFreightCalculation = ReturnType<typeof productFreightCalculation>

function* loadProductDataRequest({ payload }: ILoadProductDataRequest) {
    try {
        const { sku } = payload

        // const response: AxiosResponse<IProductProps> = yield call(
        //     api.get,
        //     `produto/${sku}`
        // )

        const response = {
            data: product
        }

        yield put(
            updateProductData({
                ...response.data
            })
        )
    } catch (err) {}
}

function* loadProductReviewsRequest({ payload }: ILoadProductReviewsRequest) {
    try {
        const { productId, page, quantity } = payload

        const response: AxiosResponse<IReviewProps[]> = yield call(
            api.get,
            `produto/${productId}/avaliacoes`,
            {
                params: {
                    pagina: page,
                    qtd: quantity
                }
            }
        )

        yield put(updateProductReviews({ reviews: response.data, productId }))
    } catch (err) {}
}

function* addProductReviewRequest({ payload }: IAddProductReviewRequest) {
    try {
        const { productId, title, recommends, comment, evaluation } = payload

        yield call(api.post, `produto/avaliacao`, {
            produtoId: productId,
            titulo: title,
            comentario: comment,
            recomenda: recommends,
            nota: evaluation
        })

        yield put(loadProductReviews({ productId }))
    } catch (err) {}
}

function* productFreightCalculationRequest({
    payload
}: IProductFreightCalculation) {
    try {
        const { sku, quantity, zipCode } = payload

        const response: AxiosResponse = yield call(
            api.post,
            `produto/${sku}/calcular-frete/${zipCode}`,
            {
                params: {
                    quantidade: quantity
                }
            }
        )
        yield put(updateProductFreightCalculation(response.data.opcoes))
    } catch (err) {}
}

export default all([
    takeLatest(ActionTypes.addProductReview, addProductReviewRequest),
    takeLatest(ActionTypes.loadProductData, loadProductDataRequest),
    takeLatest(ActionTypes.loadProductReviews, loadProductReviewsRequest),
    takeLatest(
        ActionTypes.productFreightCalculation,
        productFreightCalculationRequest
    )
])
