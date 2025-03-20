import { useEffect } from 'react'

import Head from 'next/head'
import { AppProps } from 'next/app'

import AppProvider from 'hooks'

import { config } from '../mocks' // TODO REMOVER MOCK

import GlobalStyle from '../styles/global'
import 'swiper/css/effect-fade'
import 'swiper/swiper-bundle.css'

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
            document.documentElement.style.setProperty(
                '--images_size',
                corDaApi.imagesSize
            )
            document.documentElement.style.setProperty(
                '--default_showcase_mobile',
                corDaApi.defaultShowcaseMobile
            )
        })
    }, [])

    return (
        <AppProvider>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
            </Head>

            <Component {...pageProps} />
            <GlobalStyle />
        </AppProvider>
    )
}

export default MyApp
