/* eslint-disable consistent-return */
import React, {
    createContext,
    useCallback,
    useContext,
    PropsWithChildren
} from 'react'

import api from 'services/api'
import { IUserProps, IRegisterProps, signOut } from 'store/modules/profile'

interface IAuthContextData {
    signUp(data: IRegisterProps): Promise<void>
    forgotPassword(login: string): Promise<string | undefined>
    newPassword(
        password: string,
        password_confirmation: string,
        token: string | string[]
    ): Promise<void>
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const signUp = useCallback(async (data: IRegisterProps) => {
        const response = await api.post<IUserProps>(
            data.typePerson.length <= 11 ? 'cliente-pf' : 'cliente-pj',
            {
                nomeCompleto: data.name,
                dataNascimento: data.birth.toLocaleDateString('pt-BR'),
                genero: data.genre.value,
                documento: data.typePerson,
                telefone: data.phone,
                codigoPostal: data.zip_code,
                logradouro: data.address,
                numero: data.number.trim().split('_').join(''),
                complemento: data.complement,
                referencia: data.reference_point,
                ibge: data.ibge,
                cidade: data.city,
                uf: data.state.value,
                bairro: data.district,
                email: data.email,
                senha: data.password,
                confirmarSenha: data.password_confirmation,
                enviarEmail: true,
                recuperarSenha: false
            }
        )

        api.defaults.headers.Authorization = `Bearer ${response.data.token}`
        api.defaults.headers['x-uf'] = response.data.uf
    }, [])

    const forgotPassword = useCallback(async (login: string) => {
        const response = await api.post('cliente/recuperar-senha', {
            emailOuDocumento: login,
            gerarNovaSenha: true
        })

        if (response.data.sucesso) {
            return response.data.emailEnviado
        }
    }, [])

    const newPassword = useCallback(
        async (
            password: string,
            password_confirmation: string,
            token: string
        ) => {
            await api.post('cliente/nova-senha', {
                codigoRecuperacao: token,
                novaSenha: password,
                confirmarSenha: password_confirmation
            })
        },
        []
    )

    return (
        <AuthContext.Provider
            value={{
                signUp,
                forgotPassword,
                newPassword
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): IAuthContextData {
    const context = useContext(AuthContext)

    return context
}
