import { AxiosResponse } from 'axios'
import { all, takeLatest, call, put } from 'redux-saga/effects'

import api from 'services/api'

import { updateHomeBannersIntermediate, updateHomeData } from './actions'
import {
    ActionTypes,
    IBannersIntermediateProps,
    IHomeDataResponse
} from './types'
import { showcase } from 'mocks/mockShowcase'

function* loadHomeDataRequest() {
    try {
        // const response: AxiosResponse<IHomeDataResponse> = yield call(
        //     api.get,
        //     `vitrine/home`
        // )

        const response = {
            data: showcase
        }

        yield put(updateHomeData(response.data))

        // const response2: AxiosResponse<Array<IBannersIntermediateProps>> =
        //     yield call(api.get, 'banners-intermediarios/home/vitrine', {
        //         params: { plataforma: 'WEB' }
        //     })

        // const sortedBanners = response2.data.sort((a, b) => a.ordem - b.ordem)

        // yield put(updateHomeBannersIntermediate(sortedBanners))
    } catch (err) {}
}

export default all([takeLatest(ActionTypes.loadHomeData, loadHomeDataRequest)])
