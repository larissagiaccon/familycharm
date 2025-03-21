import produce from 'immer'
import Cookies from 'js-cookie'
import { HYDRATE } from 'next-redux-wrapper'
import { AnyAction, Reducer } from 'redux'

import {
    ActionTypes,
    IConfigApplicationProps,
    IConfigProps,
    IRedirectProps,
    IUFProps
} from './types'

const INITIAL_STATE: IConfigProps = {
    config: {} as IConfigApplicationProps,
    categories: [],
    redirectData: {} as IRedirectProps,
    uf: {} as IUFProps,
    backgroundColorHeader: '',
    porcentagem: '0'
} as IConfigProps

const config: Reducer<IConfigProps> = (
    state = INITIAL_STATE,
    action: AnyAction
) => {
    return produce(state, draft => {
        switch (action.type) {
            case HYDRATE: {
                const nextState = { ...draft, ...action.payload.config }

                if (Object.keys(state.porcentagem).length)
                    nextState.porcentagem = state.porcentagem
                if (Object.keys(state.config).length)
                    nextState.config = state.config
                if (Object.keys(state.uf).length) nextState.uf = state.uf

                return nextState
            }

            case ActionTypes.updateConfigApplication: {
                // eslint-disable-next-line no-shadow
                const { config, categories, porcentagem } = action.payload

                Cookies.set('@FlordoDeserto:porcentagem', porcentagem)

                return { ...draft, config, categories, porcentagem }
            }

            case ActionTypes.setBackgroundColorHeader: {
                const { color } = action.payload

                return { ...draft, backgroundColorHeader: color }
            }

            case ActionTypes.setUF: {
                const { uf } = action.payload
                Cookies.set('@FlordoDeserto:cookies:uf', JSON.stringify(uf))
                return { ...draft, uf }
            }

            case ActionTypes.setPorcentagem: {
                const { porcentagem: percent } = action.payload

                if (draft.porcentagem !== percent) {
                    Cookies.set('@FlordoDeserto:porcentagem', percent)

                    return { ...draft, porcentagem: percent }
                }

                return { ...draft }
            }

            default: {
                if (typeof window !== 'undefined') {
                    const uf = Cookies.get('@FlordoDeserto:cookies:uf')
                    const porcentagem = Cookies.get(
                        '@FlordoDeserto:porcentagem'
                    )

                    if (uf && porcentagem) {
                        return {
                            ...draft,
                            uf: JSON.parse(uf),
                            porcentagem
                        }
                    }
                }
                return draft
            }
        }
    })
}

export default config
