import { useEffect } from 'react'

import Link from 'next/link'
import debounce from 'lodash.debounce'
import { SlBasket } from 'react-icons/sl'
import { FiMenu, FiSearch, FiUser } from 'react-icons/fi'

import HeaderMobile from './HeaderMobile'

import { cart, config, user } from '../../../mocks' // TODO REMOVER MOCK

import * as S from './styles'

export default function Header() {
    const handleScroll = debounce(() => {
        if (typeof window !== 'undefined') {
            let searchMobile = document.getElementById('search-mobile')

            let headerWeb: HTMLElement
            let headerWebHeight = 0
            let headerMobile: HTMLElement
            let headerMobileHeight = 0

            if (window.innerWidth > 768) {
                headerWeb = document.getElementById('header-web')
                headerWebHeight = headerWeb?.offsetHeight
            } else {
                headerMobile = document.getElementById('header-mobile')
                headerMobileHeight = headerMobile?.offsetHeight
            }

            document.getElementsByTagName('body')[0].onscroll = ev => {
                if (window.innerWidth > 768) {
                    if (
                        (ev.composedPath()[1] as any).pageYOffset >
                        headerWebHeight
                    ) {
                        const swap = document.getElementById('height-swap')

                        if (swap) {
                            swap.style.height = `${headerWebHeight}px`
                            headerWeb?.classList.add('fixed')
                        }

                        return
                    }

                    headerWeb?.classList.remove('fixed')
                } else {
                    if (
                        (ev.composedPath()[1] as any).pageYOffset >
                        headerMobileHeight
                    ) {
                        const swap =
                            document.getElementById('height-swap-mobile')

                        if (swap) {
                            searchMobile.style.display = 'none'
                            swap.style.height = `${headerWebHeight}px`
                            headerMobile?.classList.add('fixed')
                        }

                        return
                    }

                    headerMobile?.classList.remove('fixed')
                    searchMobile.style.display = 'flex'
                }

                return
            }
        }
    }, 100)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <S.Container className="header">
            <HeaderMobile />

            <div className="content" id="header-web">
                <div id="height-swap" />

                <FiMenu className="menu-sandwich" />

                <img
                    src={config.aparencia.logo}
                    alt={config.loja.nome}
                    className="logo"
                />

                <div className="search">
                    <input type="text" placeholder="Pesquisar..." />
                    <button type="submit">
                        <FiSearch />
                    </button>
                </div>

                <div>
                    <div className="user-info">
                        <FiUser />
                        {user ? (
                            <Link
                                href="/central-do-cliente/minha-conta"
                                passHref
                            >
                                <a href="">
                                    <p>Olá, {user.nomeExibicao}!</p>
                                    <strong>Minha conta</strong>
                                </a>
                            </Link>
                        ) : (
                            <Link href="/identificacao" passHref>
                                <a href="">
                                    <p>Olá, Visitante!</p>
                                    <strong>Cadastre-se | Login</strong>
                                </a>
                            </Link>
                        )}
                    </div>

                    <div className="cart-itens">
                        <SlBasket />
                        <p>{cart.totalItens}</p>
                    </div>
                </div>
            </div>
        </S.Container>
    )
}
