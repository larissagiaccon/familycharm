import produce from 'immer'
import Cookies from 'js-cookie'
import { HYDRATE } from 'next-redux-wrapper'
import { AnyAction, Reducer } from 'redux'

import api from 'services/api'
import { objectIsEmpty } from 'utils/objectEmpty'

import {
    ActionTypes,
    IProfileState,
    IUserProps,
    IRequestItemProps,
    IUserDataProps
} from './types'

const INITIAL_STATE: IProfileState = {
    user: {} as IUserProps,
    userData: {} as IUserDataProps,
    addresses: [],
    requests: [],
    requestViewer: {} as IRequestItemProps,
    favorites: []
} as IProfileState

const profile: Reducer<IProfileState> = (
    state = INITIAL_STATE,
    action: AnyAction
) => {
    return produce(state, draft => {
        switch (action.type) {
            case HYDRATE: {
                const nextState = { ...draft, ...action.payload.profile }

                if (Object.keys(state.user).length) nextState.user = state.user

                return nextState
            }

            case ActionTypes.updateAddressList: {
                const { addresses } = action.payload

                return { ...draft, addresses }
            }

            case ActionTypes.updateRequestList: {
                const { requests } = action.payload
                return { ...draft, requests }
            }

            case ActionTypes.updateRequestViewer: {
                const { requestViewer } = action.payload
                return { ...draft, requestViewer }
            }

            case ActionTypes.updateUserData: {
                const { userData } = action.payload
                return { ...draft, userData }
            }

            case ActionTypes.updateFavoritesList: {
                const { favorites } = action.payload
                return { ...draft, favorites }
            }

            case ActionTypes.updateUserSessionData: {
                const { userSession } = action.payload

                if (userSession) {
                    api.defaults.headers.Authorization = `Bearer ${userSession.token}`
                    api.defaults.headers['x-uf'] = userSession.uf

                    Cookies.set(
                        '@FlordoDeserto:user',
                        JSON.stringify(userSession)
                    )
                    return { ...draft, user: userSession }
                }

                return { ...draft }
            }

            case ActionTypes.signOut: {
                Cookies.remove('@FlordoDeserto:user')

                return INITIAL_STATE
            }

            default: {
                if (process.browser) {
                    const user = Cookies.get('@FlordoDeserto:user')

                    if (user && objectIsEmpty(draft.user)) {
                        return { ...draft, user: JSON.parse(user) }
                    }
                }
                return draft
            }
        }
    })
}

export default profile
