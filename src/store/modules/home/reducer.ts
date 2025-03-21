import produce from 'immer'
import { HYDRATE } from 'next-redux-wrapper'
import { AnyAction, Reducer } from 'redux'

import { ActionTypes, IHomeDataState } from './types'

const INITIAL_STATE: IHomeDataState = {
    banners: [],
    components: [],
    bannersIntermediate: []
} as IHomeDataState

const homeData: Reducer<IHomeDataState> = (
    state = INITIAL_STATE,
    action: AnyAction
) => {
    return produce(state, draft => {
        switch (action.type) {
            case HYDRATE: {
                return { ...draft, ...action.payload.homeData }
            }

            case ActionTypes.updateHomeData: {
                const { banners, componentes } = action.payload

                return { ...draft, banners, components: componentes }
            }

            case ActionTypes.updateHomeBannersIntermediate: {
                const { bannersIntermediate } = action.payload

                return { ...draft, bannersIntermediate }
            }

            default: {
                return draft
            }
        }
    })
}

export default homeData
