import {
    ActionTypes,
    IBannersIntermediateProps,
    IHomeDataResponse
} from './types'

export function loadHomeData() {
    return {
        type: ActionTypes.loadHomeData,
        payload: {}
    }
}

export function updateHomeData({ banners, componentes }: IHomeDataResponse) {
    return {
        type: ActionTypes.updateHomeData,
        payload: {
            banners,
            componentes
        }
    }
}

export function updateHomeBannersIntermediate(
    bannersIntermediate: Array<IBannersIntermediateProps>
) {
    return {
        type: ActionTypes.updateHomeBannersIntermediate,
        payload: {
            bannersIntermediate
        }
    }
}
