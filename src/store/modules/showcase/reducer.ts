import produce from 'immer'
import { HYDRATE } from 'next-redux-wrapper'
import { AnyAction, Reducer } from 'redux'

import {
    ActionTypes,
    IFilterProps,
    IShowCaseProps,
    IShowCaseState
} from './types'

export const INITIAL_STATE_FILTERS: IFilterProps = {
    tamanho: 28,
    ord: '',
    pagina: 1,
    ma: null,
    ca: [],
    produtos: null,
    promocaoId: null,
    freteGratis: null,
    produtoBrinde: null,
    inativos: null,
    pg: null,
    t: null,
    termo: null
}

const INITIAL_STATE: IShowCaseState = {
    showcase: {} as IShowCaseProps,
    banners: [],
    filters: INITIAL_STATE_FILTERS
} as IShowCaseState

const showcase: Reducer<IShowCaseState> = (
    state = INITIAL_STATE,
    action: AnyAction
) => {
    return produce(state, draft => {
        switch (action.type) {
            case HYDRATE: {
                return { ...draft, ...action.payload.showcase }
            }
            case ActionTypes.updateShowCaseData: {
                // eslint-disable-next-line no-shadow
                const { showcase } = action.payload

                if (
                    showcase.categoriaId === draft.showcase.categoriaId &&
                    showcase.filtros.opcoesSelecionadas.pagina !== 1
                ) {
                    return {
                        ...draft,
                        showcase
                    }
                }

                return { ...draft, showcase }
            }

            case ActionTypes.updateShowCaseBanners: {
                const { banners } = action.payload

                return { ...draft, banners }
            }

            case ActionTypes.updateFilters: {
                const { filters } = action.payload

                return { ...draft, filters: { ...draft.filters, ...filters } }
            }
            case ActionTypes.resetFilters: {
                return { ...draft, filters: INITIAL_STATE_FILTERS }
            }
            default: {
                return draft
            }
        }
    })
}

export default showcase
