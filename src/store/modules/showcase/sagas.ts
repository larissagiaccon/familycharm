import { AxiosResponse } from 'axios'
import { all, takeLatest, call, put } from 'redux-saga/effects'

import api from 'services/api'

import {
    loadShowCaseData,
    updateShowCaseBanners,
    updateShowCaseData
} from './actions'
import { ActionTypes, IBannerProps, IShowCaseProps } from './types'

type ILoadShowCaseDataProps = ReturnType<typeof loadShowCaseData>

function* loadShowCaseDataRequest({ payload }: ILoadShowCaseDataProps) {
    try {
        const { permaLink, routeParams } = payload
        let response: AxiosResponse<IShowCaseProps>
        let response2: AxiosResponse<Array<IBannerProps>>
        if (permaLink.match('/busca')) {
            response = yield call(api.get, `${permaLink}`, {
                params: routeParams && routeParams
            })
        } else {
            response = yield call(api.get, `${permaLink}`, {
                params: routeParams && routeParams
            })
        }
        if (permaLink.match('/categoria/')) {
            response2 = yield call(
                api.get,
                `banners/categoria/${response.data.categoriaId}/full`
            )

            yield put(updateShowCaseBanners(response2.data))
        } else if (permaLink.match('/marca/')) {
            response2 = yield call(
                api.get,
                `banners/marca/${response.data.marcaId}/full`
            )

            yield put(updateShowCaseBanners(response2.data))
        } else {
            yield put(updateShowCaseBanners([]))
        }

        yield put(
            updateShowCaseData({
                ...response.data,
                hasMore: response.data.vitrine.length > 0
            })
        )
    } catch (err) {}
}

export default all([
    takeLatest(ActionTypes.loadShowCaseData, loadShowCaseDataRequest)
])
