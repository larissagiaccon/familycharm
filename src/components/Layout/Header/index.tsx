import { useCallback, useEffect, useState } from 'react'

import Link from 'next/link'
import debounce from 'lodash.debounce'
import { useRouter } from 'next/router'
import { SlBasket } from 'react-icons/sl'
import { FiMenu, FiUser } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'

import { IState } from 'store'
import { useMiniCart } from 'hooks'
import { ICartProps } from 'store/modules/cart'
import { objectIsEmpty } from 'utils/objectEmpty'
import { IConfigProps } from 'store/modules/config'
import { IUserProps, signOut } from 'store/modules/profile'

import MiniCart from '../MiniCart'
import HeaderMobile from './HeaderMobile'

import * as S from './styles'

export default function Header() {
    const router = useRouter()
    const dispatch = useDispatch()
    const { dropMiniCart, dropped } = useMiniCart()
    const cart = useSelector<IState, ICartProps>(state => state.cart.cart)
    const user = useSelector<IState, IUserProps>(state => state.profile.user)
    const { config } = useSelector<IState, IConfigProps>(state => state.config)

    const [showSearch, setShowSearch] = useState(false)
    const [closingSearch, setClosingSearch] = useState(false)

    const handleScroll = debounce(() => {
        if (typeof window !== 'undefined') {
            if (window.location.pathname === '/') {
                setClosingSearch(true)
                setTimeout(() => {
                    setShowSearch(false)
                }, 200)
            }

            let headerWeb: HTMLElement | null
            let headerWebHeight = 0
            let headerMobile: HTMLElement | null
            let headerMobileHeight = 0

            if (window.innerWidth > 768) {
                headerWeb = document.getElementById('header-web')
                if (headerWeb) headerWebHeight = headerWeb.offsetHeight
            } else {
                headerMobile = document.getElementById('header-mobile')
                if (headerMobile) headerMobileHeight = headerMobile.offsetHeight
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
                            swap.style.height = `${headerWebHeight}px`
                            headerMobile?.classList.add('fixed')
                        }

                        return
                    }

                    headerMobile?.classList.remove('fixed')
                }

                return
            }
        }
    }, 100)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleSignOut = useCallback(() => {
        dispatch(signOut({}))
    }, [dispatch])

    return (
        <>
            {dropped && <MiniCart onClose={dropMiniCart} />}

            <S.Container className="header">
                <HeaderMobile />

                <div className="content" id="header-web">
                    <div id="height-swap" />

                    <FiMenu className="menu-sandwich" />

                    <Link href="/" passHref>
                        <a href="">
                            <img
                                src={config.aparencia.logo}
                                alt={config.loja.nome}
                                className="logo"
                            />
                        </a>
                    </Link>

                    <div>
                        {/* <div className="search">
                            {showSearch ? (
                                <>
                                    <div
                                        className={`input-search${
                                            closingSearch ? ' closing' : ''
                                        }`}
                                    >
                                        <input
                                            type="text"
                                            placeholder="Pesquisar..."
                                        />
                                        <button type="submit">
                                            <FiSearch />
                                        </button>
                                    </div>
                                    <div
                                        className="close-search"
                                        onClick={() => {
                                            setClosingSearch(true)
                                            setTimeout(() => {
                                                setShowSearch(false)
                                                setClosingSearch(false)
                                            }, 200)
                                        }}
                                    >
                                        <FiX />
                                    </div>
                                </>
                            ) : (
                                <FiSearch
                                    onClick={() => {
                                        setShowSearch(true)
                                    }}
                                />
                            )}
                        </div> */}

                        <div className="user-info">
                            <FiUser />
                            {!objectIsEmpty(user) ? (
                                <div className="my-account-or-sign-out">
                                    <Link
                                        href="/central-do-cliente/minha-conta"
                                        passHref
                                    >
                                        <a href="">
                                            <p>Olá, {user.nomeExibicao}!</p>
                                            <strong>Minha conta</strong>
                                        </a>
                                    </Link>
                                    <strong
                                        title="Sair"
                                        onClick={handleSignOut}
                                    >
                                        | Sair
                                    </strong>
                                </div>
                            ) : (
                                <Link href="/identificacao" passHref>
                                    <a href="">
                                        <p>Olá, Visitante!</p>
                                        <strong>Cadastre-se | Login</strong>
                                    </a>
                                </Link>
                            )}
                        </div>

                        <div
                            className={`cart-itens${
                                cart.itens?.length > 0 ? ' have-items' : ''
                            }`}
                            onClick={() => {
                                if (!router.asPath.includes('/checkout'))
                                    dropMiniCart()
                            }}
                        >
                            <SlBasket />
                            <p>{cart.totalItens}</p>
                        </div>
                    </div>
                </div>
            </S.Container>
        </>
    )
}
