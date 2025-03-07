import { useEffect } from 'react'
import { AppProps } from 'next/app'

import { config } from '../mocks' // TODO REMOVER MOCK

import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    useEffect(() => {
        // Função simulada para obter a cor da API
        const obterCorDaApi = async () => {
            // Simulação de uma chamada à API que retorna uma cor
            return config.layout
        }

        // Obtém a cor da API e atualiza a variável CSS
        obterCorDaApi().then(corDaApi => {
            document.documentElement.style.setProperty(
                '--primary_color',
                corDaApi.primaryColor
            )
            document.documentElement.style.setProperty(
                '--secondary_color',
                corDaApi.secondaryColor
            )
            document.documentElement.style.setProperty(
                '--text_color',
                corDaApi.textColor
            )
            document.documentElement.style.setProperty(
                '--background_color',
                corDaApi.backgroundColor
            )
        })
    }, [])

    return (
        <>
            <Component {...pageProps} />
            <GlobalStyle />
        </>
    )
}

export default MyApp
