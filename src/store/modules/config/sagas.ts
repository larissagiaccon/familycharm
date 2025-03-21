import { config } from 'mocks'
import { AxiosResponse } from 'axios'
import { all, takeLatest, call, put } from 'redux-saga/effects'

import api from 'services/api'
import { getUF } from 'utils/getUF'

import { updateCartData } from '../cart'
import { setPorcentagem, setUF, updateConfigApplication } from './actions'
import {
    ActionTypes,
    IConfigApplicationProps,
    INavigationCategoryProps
} from './types'

type ILoadUfRequest = ReturnType<typeof setUF>

function* loadConfigApplicationRequest() {
    try {
        // const response: AxiosResponse<IConfigApplicationProps> = yield call(
        //     api.get,
        //     'configuracoes'
        // )

        // const response2: AxiosResponse<Array<INavigationCategoryProps>> =
        //     yield call(api.get, 'categorias/arvore')

        const response = {
            data: config,
            headers: {
                ['x-uf']: 'Sp',
                ['x-porcentagem']: '20'
            }
        }

        const response2 = {
            data: [
                {
                    id: 2909,
                    nome: 'Tata Martello',
                    descricao: '',
                    permalink: '',
                    contador: 0,
                    categoriaPaiId: null,
                    exibirMenu: true,
                    imagemUrl: '',
                    imagemThumbUrl: '',
                    tipoDeepLink: null,
                    valorDeepLink: null,
                    deepLink: '',
                    filhos: []
                }
            ]
        }

        const uf = getUF(response.headers['x-uf'])
        const porcentagem = response.headers['x-porcentagem']

        yield put(
            updateConfigApplication({
                config: {
                    ...response.data
                },
                categories: response2.data,
                uf,
                porcentagem
            })
        )
    } catch (err) {}
}

function* loadUfRequest({ payload }: ILoadUfRequest) {
    const { uf } = payload

    api.defaults.headers['x-uf'] = uf.value

    const response: AxiosResponse = yield call(api.get, `carrinho`)

    const porcentagem = response.headers['x-porcentagem']

    yield put(updateCartData({ cart: response.data, showMiniCart: false }))
    yield put(setPorcentagem(porcentagem))
}

export default all([
    // takeLatest(ActionTypes.loadConfigApplication, loadConfigApplicationRequest),
    call(loadConfigApplicationRequest),
    takeLatest(ActionTypes.setUF, loadUfRequest)
])
