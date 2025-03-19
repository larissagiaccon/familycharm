import { useState } from 'react'

import Link from 'next/link'
import { TbListDetails } from 'react-icons/tb'
import { TiHeart, TiHeartOutline } from 'react-icons/ti'

import Modal from 'components/common/Modal'

import Product from '../Product'
import ProductImage from './ProductImage'

import { IProductCarouselProps } from 'mocks/mockedProduct' // TODO REMOVER MOCK

import * as S from './styles'

interface IProductItemProps {
    product: IProductCarouselProps
}

export default function ProductItem({ product }: IProductItemProps) {
    const [hoverEffect, setHoverEffect] = useState(false)
    const [showModalSeeMoreDetails, setShowModalSeeMoreDetails] =
        useState(false)

    return (
        <>
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
                <div className="product-options-group">
                    {product.favorito ? (
                        <TiHeart
                            className="favorite"
                            title="Remover dos favoritos"
                        />
                    ) : (
                        <TiHeartOutline title="Adicionar aos favoritos" />
                    )}

                    <TbListDetails
                        className="see-details"
                        title="Visão rápida"
                        onClick={() => setShowModalSeeMoreDetails(true)}
                    />
                </div>

                <ProductImage
                    product={product}
                    setShowModalSeeMoreDetails={setShowModalSeeMoreDetails}
                />

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
                                ou até {product.maximoParcelas}x de{' '}
                                {product.valorParcelaTexto} no cartão
                            </p>
                        </div>
                    </a>
                </Link>
            </S.Container>

            {showModalSeeMoreDetails && (
                <Modal
                    onClose={() => setShowModalSeeMoreDetails(false)}
                    classNameContainer="modal-see-more-details-modal"
                >
                    <Product product={product} />
                </Modal>
            )}
        </>
    )
}
