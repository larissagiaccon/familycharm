import {
    ActionTypes,
    IAddressProps,
    IFavoritesProps,
    IRequestItemProps,
    IRequestProps,
    IUpdateRegisterProps,
    IUserDataProps,
    IUserProps
} from './types'

export function loadAddressList() {
    return {
        type: ActionTypes.loadAddressList,
        payload: {}
    }
}

export function updateAddressList(addresses: Array<IAddressProps>) {
    return {
        type: ActionTypes.updateAddressList,
        payload: {
            addresses
        }
    }
}

export function selectDefaultAddress(addressId: number) {
    return {
        type: ActionTypes.selectDefaultAddress,
        payload: {
            addressId
        }
    }
}

export function deleteAddress(addressId: number) {
    return {
        type: ActionTypes.deleteAddress,
        payload: {
            addressId
        }
    }
}

interface IAddNewAddressProps {
    address: IAddressProps
    selectAddress?: boolean
}

export function addNewAddress({ address, selectAddress }: IAddNewAddressProps) {
    return {
        type: ActionTypes.addNewAddress,
        payload: {
            address,
            selectAddress
        }
    }
}

interface IUpdateAddresProps {
    address: IAddressProps
    addressId: number
    selectAddress?: boolean
}

export function updateAddress({
    address,
    addressId,
    selectAddress
}: IUpdateAddresProps) {
    return {
        type: ActionTypes.updateAddress,
        payload: {
            address,
            addressId,
            selectAddress
        }
    }
}

interface ILoadRequestListProps {
    quantity?: number
    page?: number
}

export function loadRequestList({ quantity, page }: ILoadRequestListProps) {
    return {
        type: ActionTypes.loadRequestList,
        payload: {
            quantity,
            page
        }
    }
}

export function updateRequestList(requests: IRequestProps[]) {
    return {
        type: ActionTypes.updateRequestList,
        payload: {
            requests
        }
    }
}

interface ILoadRequestViewerProps {
    transaction: string
}

export function loadRequestViewer({ transaction }: ILoadRequestViewerProps) {
    return {
        type: ActionTypes.loadRequestViewer,
        payload: {
            transaction
        }
    }
}

export function updateRequestViewer(requestViewer: IRequestItemProps[]) {
    return {
        type: ActionTypes.updateRequestViewer,
        payload: {
            requestViewer
        }
    }
}

interface IResendRequestProps {
    transaction: string
}

export function resendRequest({ transaction }: IResendRequestProps) {
    return {
        type: ActionTypes.resendRequest,
        payload: {
            transaction
        }
    }
}

interface IUpdatePasswordProps {
    password: string
    new_password: string
    new_password_confirmation: string
}

export function updatePassword({
    password,
    new_password,
    new_password_confirmation
}: IUpdatePasswordProps) {
    return {
        type: ActionTypes.updatePassword,
        payload: {
            password,
            new_password,
            new_password_confirmation
        }
    }
}

export function loadUserData() {
    return {
        type: ActionTypes.loadUserData,
        payload: {}
    }
}

export function updateUserData(userData: IUserDataProps) {
    return {
        type: ActionTypes.updateUserData,
        payload: {
            userData
        }
    }
}

export function updateUserRegister(user: IUpdateRegisterProps) {
    return {
        type: ActionTypes.updateUserRegister,
        payload: {
            user
        }
    }
}

interface ILoadFavoritesProps {
    quantity?: number
    page?: number
}

export function loadFavoritesList({ page, quantity }: ILoadFavoritesProps) {
    return {
        type: ActionTypes.loadFavoritesList,
        payload: {
            quantity,
            page
        }
    }
}

export function updateFavoritesList(favorites: Array<IFavoritesProps>) {
    return {
        type: ActionTypes.updateFavoritesList,
        payload: {
            favorites
        }
    }
}

interface ISetFavorite {
    productId: number
    clientId: number
    sku: string
}

export function setFavorite({ productId, clientId, sku }: ISetFavorite) {
    return {
        type: ActionTypes.setFavorite,
        payload: {
            productId,
            clientId,
            sku
        }
    }
}

interface IRemoveFavorite {
    productId: number
    isFavorite?: boolean
    sku: string
}

export function removeFavorite({
    productId,
    isFavorite,
    sku
}: IRemoveFavorite) {
    return {
        type: ActionTypes.removeFavorite,
        payload: {
            productId,
            isFavorite,
            sku
        }
    }
}

interface ISignInProps {
    login: string
    password: string
}

export function signIn({ login, password }: ISignInProps) {
    return {
        type: ActionTypes.signIn,
        payload: {
            login,
            password
        }
    }
}

interface ISignOutProps {
    isBroadCast?: boolean
}

export function signOut({ isBroadCast }: ISignOutProps) {
    return {
        type: ActionTypes.signOut,
        payload: {
            isBroadCast
        }
    }
}

export function updateUserSessionData(userSession: IUserProps) {
    return {
        type: ActionTypes.updateUserSessionData,
        payload: {
            userSession
        }
    }
}
