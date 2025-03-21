import { AxiosResponse } from 'axios'
import { all, takeLatest, call, put } from 'redux-saga/effects'

import api from 'services/api'

import { selectShippingAddress } from '../cart/actions'

import {
    addNewAddress,
    deleteAddress,
    loadAddressList,
    loadFavoritesList,
    loadRequestList,
    loadRequestViewer,
    loadUserData,
    removeFavorite,
    resendRequest,
    selectDefaultAddress,
    setFavorite,
    signIn,
    updateAddress,
    updateAddressList,
    updateFavoritesList,
    updatePassword,
    updateRequestList,
    updateRequestViewer,
    updateUserData,
    updateUserRegister,
    updateUserSessionData
} from './actions'
import {
    ActionTypes,
    IAddressProps,
    IRequestItemProps,
    IRequestProps,
    IUserDataProps,
    IUserProps
} from './types'
import { user } from 'mocks'
import { userProfile } from 'mocks/mockedLogin'

type IAddNewAddressRequest = ReturnType<typeof addNewAddress>
type IDeleteAddressRequest = ReturnType<typeof deleteAddress>
type ILoadFavoritesListRequest = ReturnType<typeof loadFavoritesList>
type ILoadRequestListRequest = ReturnType<typeof loadRequestList>
type ILoadRequestViewerRequest = ReturnType<typeof loadRequestViewer>
type IRemoveFavoriteRequest = ReturnType<typeof removeFavorite>
type IResendRequestRequest = ReturnType<typeof resendRequest>
type ISelectDefaultAddressRequest = ReturnType<typeof selectDefaultAddress>
type ISetFavoriteRequest = ReturnType<typeof setFavorite>
type ISignInRequest = ReturnType<typeof signIn>
type IUpdateAddressRequest = ReturnType<typeof updateAddress>
type IUpdatePasswordRequest = ReturnType<typeof updatePassword>
type IUpdateUserRegisterRequest = ReturnType<typeof updateUserRegister>

function* loadAddressListRequest() {
    try {
        const response: AxiosResponse<IAddressProps[]> = yield call(
            api.get,
            'cliente/enderecos'
        )

        yield put(updateAddressList(response.data))
    } catch (err) {}
}

function* selectDefaultAddressRequest({
    payload
}: ISelectDefaultAddressRequest) {
    try {
        const { addressId } = payload

        yield call(api.put, `cliente/endereco/${addressId}/padrao`)

        yield put(loadAddressList())
    } catch (err) {}
}

function* deleteAddressRequest({ payload }: IDeleteAddressRequest) {
    try {
        const { addressId } = payload

        yield call(api.delete, `cliente/enderecos/${addressId}`)

        yield put(loadAddressList())
    } catch (err) {}
}

function* addNewAddressRequest({ payload }: IAddNewAddressRequest) {
    try {
        const { address, selectAddress = false } = payload

        const response: AxiosResponse = yield call(
            api.post,
            'cliente/enderecos',
            {
                padrao: address.padrao,
                nomeCompleto: address.nomeCompleto,
                descricao: address.descricao,
                codigoPostal: address.codigoPostal,
                logradouro: address.logradouro,
                numero: address.numero,
                complemento: address.complemento,
                referencia: address.referencia,
                cidade: address.cidade,
                uf: address.uf,
                bairro: address.bairro,
                telefone1: address.telefone1,
                telefone2: address.telefone2,
                ibge: address.ibge
            }
        )

        if (selectAddress) {
            yield put(selectShippingAddress(response.data.enderecoId))
        }

        yield put(loadAddressList())
    } catch (err) {}
}

function* updateAddressRequest({ payload }: IUpdateAddressRequest) {
    try {
        const { address, addressId, selectAddress = false } = payload

        const response: AxiosResponse = yield call(
            api.put,
            `cliente/enderecos/${addressId}`,
            {
                padrao: address.padrao,
                nomeCompleto: address.nomeCompleto,
                descricao: address.descricao,
                codigoPostal: address.codigoPostal,
                logradouro: address.logradouro,
                numero: address.numero,
                complemento: address.complemento,
                referencia: address.referencia,
                cidade: address.cidade,
                uf: address.uf,
                bairro: address.bairro,
                telefone1: address.telefone1,
                telefone2: address.telefone2,
                ibge: address.ibge
            }
        )

        if (selectAddress && !!addressId) {
            yield put(selectShippingAddress(addressId))
        } else if (selectAddress) {
            yield put(selectShippingAddress(response.data.enderecoId))
        }

        yield put(loadAddressList())
    } catch (err) {}
}

function* loadRequestListRequest({ payload }: ILoadRequestListRequest) {
    try {
        const { page, quantity } = payload

        const response: AxiosResponse<IRequestProps[]> = yield call(
            api.get,
            'cliente/pedidos',
            {
                params: {
                    pagina: page,
                    qtd: quantity
                }
            }
        )
        yield put(updateRequestList(response.data))
    } catch (err) {}
}

function* loadRequestViewerRequest({ payload }: ILoadRequestViewerRequest) {
    try {
        const { transaction } = payload

        const response: AxiosResponse<IRequestItemProps[]> = yield call(
            api.get,
            `cliente/pedido/${transaction}`
        )

        yield put(updateRequestViewer(response.data))
    } catch (err) {}
}

function* resendRequestRequest({ payload }: IResendRequestRequest) {
    try {
        const { transaction } = payload

        yield call(api.post, `cliente/refazer-pedido/${transaction}`)
    } catch (err) {}
}

function* updatePasswordRequest({ payload }: IUpdatePasswordRequest) {
    try {
        const { password, new_password, new_password_confirmation } = payload

        yield call(api.post, 'cliente/alterar-senha/', {
            senhaAtual: password,
            novaSenha: new_password,
            confirmarSenha: new_password_confirmation
        })
    } catch (err) {}
}

function* loadUserDataRequest() {
    try {
        // const response: AxiosResponse<IUserDataProps> = yield call(
        //     api.get,
        //     '/cliente/'
        // )

        const response = {
            data: userProfile
        }

        yield put(updateUserData(response.data))
    } catch (err) {}
}

function* updateUserRegisterRequest({ payload }: IUpdateUserRegisterRequest) {
    try {
        const { user } = payload

        const response = yield call(api.post, '/cliente-pf/atualizar', {
            nomeCompleto: user.name,
            documento: user.cpf,
            dataNascimento: user.birth.toLocaleDateString('pt-BR'),
            genero: user.genre.value,
            telefone1: user.phone,
            telefone2: user.cell_phone,
            codigoPostal: user.zip_code,
            logradouro: user.address,
            numero: user.number,
            bairro: user.district,
            cidade: user.city,
            uf: user.state.value,
            complemento: user.complement,
            referencia: user.reference_point,
            ibge: user.ibge,
            email: user.email,
            autorizaNewsletter: user.check_box.includes('recive_news'),
            autorizaCatalogo: user.check_box.includes('provide_informations'),
            tornarEnderecoPadrao: user.address_default
        })

        if (response.data.sucesso) {
            yield put(loadUserData())
        }
    } catch (err) {}
}

function* loadFavoritesListRequest({ payload }: ILoadFavoritesListRequest) {
    try {
        const { page, quantity } = payload

        const response: AxiosResponse = yield call(api.get, '/favoritos', {
            params: {
                pagina: page,
                totalPorPagina: quantity
            }
        })

        yield put(updateFavoritesList(response.data.favoritos))
    } catch (err) {}
}

function* setFavoriteRequest({ payload }: ISetFavoriteRequest) {
    try {
        const { clientId, productId, sku } = payload

        yield call(api.post, '/favoritos', {
            produtoId: productId,
            clienteId: clientId
        })
    } catch (err) {}
}

function* removeFavoriteRequest({ payload }: IRemoveFavoriteRequest) {
    try {
        const { productId, isFavorite, sku } = payload

        yield call(api.post, `/favoritos/${productId}/remover`)

        if (isFavorite) {
            yield put(loadFavoritesList({}))
        }
    } catch (err) {}
}

function* signInRequest({ payload }: ISignInRequest) {
    try {
        const { login, password } = payload
        // const response: AxiosResponse<IUserProps> = yield call(
        //     api.post,
        //     'login',
        //     {
        //         login,
        //         senha: password
        //     }
        // )

        const response = {
            data: user
        }

        console.log(response)

        const splitName = response.data.nomeCompleto.split(' ')
        const concatName = splitName[0] + ' ' + splitName[splitName.length - 1]

        yield put(updateUserSessionData({ ...response.data, nome: concatName }))
    } catch (err) {}
}

export default all([
    takeLatest(ActionTypes.addNewAddress, addNewAddressRequest),
    takeLatest(ActionTypes.deleteAddress, deleteAddressRequest),
    takeLatest(ActionTypes.loadAddressList, loadAddressListRequest),
    takeLatest(ActionTypes.loadFavoritesList, loadFavoritesListRequest),
    takeLatest(ActionTypes.loadRequestList, loadRequestListRequest),
    takeLatest(ActionTypes.loadRequestViewer, loadRequestViewerRequest),
    takeLatest(ActionTypes.loadUserData, loadUserDataRequest),
    takeLatest(ActionTypes.removeFavorite, removeFavoriteRequest),
    takeLatest(ActionTypes.resendRequest, resendRequestRequest),
    takeLatest(ActionTypes.selectDefaultAddress, selectDefaultAddressRequest),
    takeLatest(ActionTypes.setFavorite, setFavoriteRequest),
    takeLatest(ActionTypes.signIn, signInRequest),
    takeLatest(ActionTypes.updateAddress, updateAddressRequest),
    takeLatest(ActionTypes.updatePassword, updatePasswordRequest),
    takeLatest(ActionTypes.updateUserRegister, updateUserRegisterRequest)
])
