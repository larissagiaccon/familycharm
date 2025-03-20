import { MouseEvent, useCallback, useEffect, useState } from 'react'

import { FiX } from 'react-icons/fi'

import Button from 'components/common/Button'

import MiniCartProductItem from './MiniCartProductItem'

import { products } from 'mocks/mockedProduct' //TODO REMOVER MOCK

import * as S from './styles'

interface IMiniCartProps {
    onClose(): void
}

export default function MiniCart({ onClose }: IMiniCartProps) {
    const [itsClosing, setItsClosing] = useState(false)

    const handleControlPropagation = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            e.stopPropagation()
            e.nativeEvent.stopImmediatePropagation()
        },
        []
    )

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        document.body.style.height = '100vh'

        return () => {
            document.body.style.overflow = 'auto'
            document.body.style.height = 'initial'
        }
    }, [])

    const handleCloseModal = useCallback(() => {
        setItsClosing(true)

        setTimeout(() => {
            onClose()
        }, 300)
    }, [onClose])

    return (
        <S.ContainerWrapper
            onClick={handleCloseModal}
            role="presentation"
            className="mini-cart-wrapper"
        >
            <S.Container
                className={`mini-cart${itsClosing ? ' closing' : ''}`}
                onClick={handleControlPropagation}
            >
                <div className="mini-cart-title">
                    <h3>Meu carrinho</h3>

                    <FiX
                        className="x-icon"
                        onClick={handleCloseModal}
                        title="Fechar carrinho"
                    />
                </div>

                <div className="mini-cart-products-list">
                    {products.map((item, index) => (
                        <MiniCartProductItem key={index} product={item} />
                    ))}
                </div>

                <div className="mini-cart-buttons">
                    <Button className="outline">Ir para o carrinho</Button>
                    <Button>Continuar comprando</Button>
                </div>
            </S.Container>
        </S.ContainerWrapper>
    )
}
