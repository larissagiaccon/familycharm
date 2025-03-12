import { useState } from 'react'

import Link from 'next/link'
import { TbListDetails } from 'react-icons/tb'

import { IProductCarouselProps } from '../../../mocks/mockedProduct' // TODO REMOVER MOCK

import ProductImage from './ProductImage'

import * as S from './styles'

interface IProductItemProps {
    product: IProductCarouselProps
}

export default function ProductItem({ product }: IProductItemProps) {
    const [hoverEffect, setHoverEffect] = useState(false)

    return (
        <S.Container
            className="product-item"
            onPointerDown={() => {
                if (product.imagens.length > 0 || product.videoUrl)
                    setHoverEffect(true)
            }}
            onPointerLeave={() => {
                setTimeout(() => {
                    setHoverEffect(false)
                }, 1000)
            }}
            hoverEffect={hoverEffect}
        >
            <ProductImage product={product} />

            <Link href={product.permalink} passHref title={product.nome}>
                <a href="" className="product-item-details">
                    <p className="product-name">{product.nome}</p>

                    <div className="product-prices-installment">
                        <p className="product-old-price">
                            {product.precoDeTexto}
                        </p>

                        <p className="product-price">
                            <b>{product.precoPorTexto}</b> no PIX
                        </p>

                        <p className="product-installment">
                            ou até {product.numeroParcela}x de{' '}
                            {product.valorParcelaTexto} no cartão
                        </p>
                    </div>
                </a>
            </Link>

            <div className="see-details">
                <TbListDetails /> Visão rápida
            </div>
        </S.Container>
    )
}
