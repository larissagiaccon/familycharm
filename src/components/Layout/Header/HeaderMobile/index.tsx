import { useEffect, useState } from 'react'

import Link from 'next/link'
import debounce from 'lodash.debounce'
import { SlBasket } from 'react-icons/sl'
import { FiMenu, FiSearch, FiX } from 'react-icons/fi'

import { cart, config } from 'mocks' // TODO REMOVER MOCK

import * as S from './styles'

export default function HeaderMobile() {
    const [showSearch, setShowSearch] = useState(false)
    const [closingSearch, setClosingSearch] = useState(false)

    const handleScroll = debounce(() => {
        if (typeof window !== 'undefined') {
            if (window.location.pathname === '/') {
                setClosingSearch(true)
                setTimeout(() => {
                    setShowSearch(false)
                }, 100)
            }
        }
    }, 100)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <S.Container className="header-mobile" id="header-mobile">
            <div id="height-swap-mobile" />

            <div className="content-mobile">
                <FiMenu />

                <Link href="/" passHref>
                    <a href="">
                        <img
                            src={config.aparencia.logo}
                            alt={config.loja.nome}
                            className="logo-mobile"
                        />
                    </a>
                </Link>

                <div className="header-mobile-group">
                    <FiSearch
                        onClick={() => {
                            setShowSearch(true)
                        }}
                    />

                    <div className="cart-itens">
                        <SlBasket />
                        <p>{cart.totalItens}</p>
                    </div>
                </div>
            </div>

            {showSearch && (
                <div className={`search${closingSearch ? ' closing' : ''}`}>
                    <div className="input-search">
                        <input type="text" placeholder="Pesquisar..." />
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
                            }, 100)
                        }}
                    >
                        <FiX />
                    </div>
                </div>
            )}
        </S.Container>
    )
}
