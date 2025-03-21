import { useCallback, useEffect, useState } from 'react'

import Cookies from 'js-cookie'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'

import { useNotices } from 'hooks'
import { IUFProps } from 'utils/getUF'
import { setPorcentagem } from 'store/modules/config'
import { IUserProps, signOut } from 'store/modules/profile'

import api from './api'

export default function Interceptor() {
    const dispatch = useDispatch()
    const router = useRouter()
    const [redirectAfterLogin, setRedirectAfterLogin] = useState(false)
    //   const { setLoadingOn, setLoadingOff } = useLoading();
    let setLoadingOn // TODO REMOVER MOCK
    let setLoadingOff // TODO REMOVER MOCK

    const { addNotices } = useNotices()

    const handleSetNotices = useCallback(
        (data: AxiosResponse) => {
            //   if (data.contemErros) {
            //     addNotices({ messages: data.erros, type: 'errors' });
            //   }
            //   if (data.contemAvisos) {
            //     addNotices({ messages: data.avisos, type: 'warn' });
            //   }
            //   if (!!data.todasMensagens && !!data.todasMensagens.length) {
            //     addNotices({ messages: data.todasMensagens, type: 'allMessages' });
            //   }
        },
        [addNotices]
    )

    const handleRequestSuccess = async (request: AxiosRequestConfig) => {
        const userStorage = Cookies.get('@FlordoDeserto:user')
        const ufStorage = Cookies.get('@FlordoDeserto:cookies:uf')
        const idSession = Cookies.get('@FlordoDeserto:idSession')

        if (userStorage) {
            const userInformation: IUserProps = JSON.parse(userStorage)
            const uf: IUFProps = JSON.parse(ufStorage)
            request.headers.Authorization = `Bearer ${userInformation.token}`
            request.headers['x-uf'] = uf.value || userInformation.uf
        } else {
            request.headers.Authorization = ''
        }

        if (!idSession) {
            const newId = uuidv4()
            Cookies.set('@FlordoDeserto:idSession', newId)
            request.headers['x-cliente-token'] = newId
        } else {
            request.headers['x-cliente-token'] = idSession
        }

        // if (request.url === 'checkout/pedido') {
        //   setLoadingOn('Processando pedido...');
        // } else if (request.url !== 'configuracoes') {
        //   setLoadingOn();
        // }

        return request
    }

    const handleRequestError = (err: AxiosError) => {
        setLoadingOff()
        if (err.response) {
            handleSetNotices(err.response?.data)
        }
    }

    const handleResponseSuccess = async (response: AxiosResponse) => {
        setLoadingOff()

        const percent = response.headers['x-porcentagem']

        dispatch(setPorcentagem(percent))

        if (response.data && response.data.id) {
            handleSetNotices(response.data)
        }

        if (
            response.config.url === 'cliente/alterar-senha/' &&
            response.status === 200
        ) {
            addNotices({
                messages: ['Sua senha foi alterada com sucesso'],
                type: 'allMessages'
            })
        }
        if (
            response.config.url === '/cliente-pf/atualizar' &&
            response.status === 200
        ) {
            addNotices({
                messages: ['Seus dados foram salvos com sucesso'],
                type: 'allMessages'
            })
        }

        return response
    }

    const handleResponseError = (err: AxiosError & AxiosResponse) => {
        setLoadingOff()

        if (err?.response) {
            if (err?.response.status === 400) {
                handleSetNotices(err?.response?.data)

                if (err.response.data.recuperarSenha) {
                    router.push('/nova-senha')
                } else if (err.response.data.cadastroIncompleto) {
                    router.push('/central-do-cliente/alterar-cadastro')
                } else if (err.response.data.habilitaTelaCodigoVerificacao) {
                    router.push('/verificacao-seguranca?ReturnUrl=/')
                }
            } else if (err?.response.status === 401) {
                setRedirectAfterLogin(true)
            }
        }

        if (err.isAxiosError) {
            return Promise.reject(err.response)
        }

        return Promise.reject(err)
    }

    useEffect(() => {
        if (redirectAfterLogin) {
            router.push(`/identificacao?ReturnUrl=${router.asPath}`)

            dispatch(signOut({}))

            setRedirectAfterLogin(false)
        }
    }, [router, redirectAfterLogin, dispatch])

    useEffect(() => {
        api.interceptors.request.use(
            async (request: AxiosRequestConfig) =>
                handleRequestSuccess(request),
            (err: AxiosError) => handleRequestError(err)
        )

        api.interceptors.response.use(
            (response: AxiosResponse) => handleResponseSuccess(response),
            async (err: AxiosError & AxiosResponse) => handleResponseError(err)
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setLoadingOn, setLoadingOff, handleSetNotices, addNotices, dispatch])

    return null
}
