import { useEffect, useState } from 'react'

import Link from 'next/link'
import { FaPix, FaCreditCard } from 'react-icons/fa6'
import { TiHeart, TiHeartOutline } from 'react-icons/ti'

import Modal from '../../../Modal'
import Button from '../../../Button'

import {
    IVariationItemProps,
    IProductCarouselProps,
    IVariationsSizesAvailableProps
} from '../../../../mocks/mockedProduct' // TODO REMOVER MOCK

import * as S from './styles'

interface IProductItemProps {
    product: IProductCarouselProps
    onClose(): void
}

export default function ModalSeeMoreDetails({
    product,
    onClose
}: IProductItemProps) {
    const [sizeSelected, setSizeSelected] =
        useState<IVariationsSizesAvailableProps>()
    const [featuredProduct, setFeaturedProduct] =
        useState<IVariationItemProps>(product)

    useEffect(() => {
        const availableVariation = product.variacoes.find(
            item => item.disponivel && item
        )

        if (!product.disponivel && !!availableVariation) {
            setFeaturedProduct(availableVariation)
        }
    }, [product])

    useEffect(() => {
        setSizeSelected(featuredProduct.tamanhos[0])
    }, [featuredProduct])

    return (
        <Modal
            onClose={onClose}
            classNameContainer="modal-see-more-details-modal"
        >
            <S.Container className="modal-see-more-details">
                <Link href={product.permalink} passHref>
                    <a href="">
                        <img
                            src={featuredProduct.imagemPrincipal.grande}
                            alt={product.nome}
                            className="featured-product-image"
                        />
                    </a>
                </Link>

                <div className="info">
                    <h4 className="product-name">{featuredProduct.nome}</h4>

                    <div className="payment-methods-with-old-price">
                        {featuredProduct.precoDe > 0 && (
                            <div className="product-price-old">
                                de <span>{featuredProduct.precoDeTexto}</span>{' '}
                                por
                            </div>
                        )}

                        <div className="payment-methods">
                            <div className="payment-method-pix">
                                <div className="payment-method-pix-icon-price">
                                    <FaPix className="pix-icon" />

                                    <div className="product-price">
                                        {featuredProduct.precoPorTexto}

                                        {featuredProduct.desconto > 0 && (
                                            <p className="tag-discount">
                                                {featuredProduct.desconto}%
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <p>no PIX</p>
                            </div>

                            <div className="payment-method-credit-card">
                                <div className="payment-method-credit-card-icon-price">
                                    <FaCreditCard />

                                    <span>{product.totalParceladoTexto}</span>
                                </div>

                                <p>
                                    até <b>{product.maximoParcelas}x</b> de{' '}
                                    <b>{product.valorParcelaTexto}</b>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="variations-group">
                        <span>Cor: {featuredProduct.cor}</span>

                        <div className="variations-color">
                            <img
                                key={0}
                                src={product.imagemPrincipal.grande}
                                alt={product.nome}
                                title={product.cor}
                                className={`variation-color${
                                    product.disponivel
                                        ? ' available'
                                        : ' unavailable'
                                }${
                                    product.sku === featuredProduct.sku
                                        ? ' selected'
                                        : ' not-selected'
                                }`}
                                onClick={() => {
                                    setFeaturedProduct(product)
                                }}
                            />

                            {product.variacoes.map((item, index) => (
                                <img
                                    key={index + 1}
                                    src={item.imagemPrincipal.grande}
                                    alt={product.nome}
                                    title={item.cor}
                                    className={`variation-color${
                                        item.disponivel
                                            ? ' available'
                                            : ' unavailable'
                                    }${
                                        item.sku === featuredProduct.sku
                                            ? ' selected'
                                            : ' not-selected'
                                    }`}
                                    onClick={() => {
                                        setFeaturedProduct({
                                            ...product,
                                            ...item
                                        })
                                    }}
                                />
                            ))}
                        </div>

                        <span>Tamanho: {sizeSelected?.tamanho}</span>

                        <div className="variations-size">
                            {featuredProduct.tamanhos.map((item, index) => (
                                <p
                                    key={index}
                                    className={`variation-size${
                                        item.disponivel
                                            ? ' available'
                                            : ' unavailable'
                                    }${
                                        item.tamanho === sizeSelected?.tamanho
                                            ? ' selected'
                                            : ' not-selected'
                                    }`}
                                    onClick={() => setSizeSelected(item)}
                                >
                                    {item.tamanho}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="buttons-group">
                        {featuredProduct.disponivel &&
                        sizeSelected?.disponivel ? (
                            <Button>Adicionar ao carrinho</Button>
                        ) : (
                            <Button disabled>Esgotado</Button>
                        )}

                        <span
                            className={`${
                                product.favorito ? 'favorite' : 'not-favorite'
                            }`}
                        >
                            {product.favorito ? (
                                <TiHeart />
                            ) : (
                                <TiHeartOutline />
                            )}
                        </span>
                    </div>

                    {featuredProduct.disponivel ? (
                        <Button className="outline">Comprar agora</Button>
                    ) : (
                        <Button className="outline unavailable">
                            Avise-me quando estiver em estoque
                        </Button>
                    )}
                </div>
            </S.Container>
        </Modal>
    )
}
