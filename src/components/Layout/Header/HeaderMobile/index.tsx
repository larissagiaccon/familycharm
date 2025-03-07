import { SlBasket } from 'react-icons/sl'
import { FiMenu, FiSearch } from 'react-icons/fi'

import { cart, config } from '../../../../mocks' // TODO REMOVER MOCK

import * as S from './styles'

export default function HeaderMobile() {
    return (
        <S.Container className="header-mobile" id="header-mobile">
            <div id="height-swap-mobile" />

            <div className="content">
                <FiMenu />

                <img
                    src={config.aparencia.logo}
                    alt={config.loja.nome}
                    className="logo"
                />

                <div>
                    <div className="cart-itens">
                        <SlBasket />
                        <p>{cart.totalItens}</p>
                    </div>
                </div>
            </div>

            <div className="search" id="search-mobile">
                <input type="text" placeholder="Pesquisar..." />
                <button type="submit">
                    <FiSearch />
                </button>
            </div>
        </S.Container>
    )
}
