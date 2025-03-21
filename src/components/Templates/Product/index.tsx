import { useCallback, useEffect, useRef, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaPix, FaCreditCard } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { TiHeart, TiHeartOutline } from 'react-icons/ti'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import {
    IImageProps,
    IProductProps,
    IVariationItemProps,
    IProductCarouselProps,
    IVariationsSizesAvailableProps
} from 'store/modules/product'
import { IState } from 'store'
import { useNotices } from 'hooks'
import { getGACartItemsParams } from 'utils/gtag'
import { objectIsEmpty } from 'utils/objectEmpty'
import { addProductToCart } from 'store/modules/cart'
import { IUserProps, removeFavorite, setFavorite } from 'store/modules/profile'

import Button from 'components/common/Button'
import { Gallery } from 'components/pages/PDP/Gallery'

import * as S from './styles'

interface IProductItemProps {
    product: IProductCarouselProps | IProductProps
}

export default function Product({ product }: IProductItemProps) {
    const router = useRouter()
    const swiperRef = useRef(null)
    const dispatch = useDispatch()
    const { pathname } = useRouter()
    const { addNotices } = useNotices()

    const user = useSelector<IState, IUserProps>(state => state.profile.user)

    const [sizeSelected, setSizeSelected] =
        useState<IVariationsSizesAvailableProps>()
    const [featuredProduct, setFeaturedProduct] =
        useState<IVariationItemProps>(product)
    const [featuredProductImages, setFeaturedProductImages] = useState<
        IImageProps[]
    >(featuredProduct.imagens)
    const [quantityItems, setQuantityItems] = useState(1)
    const [isFavorite, setIsFavorite] = useState(product.favorito)
    const [showProductVideo, setShowProductVideo] = useState(false)

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
        setFeaturedProductImages(
            [featuredProduct.imagemPrincipal]
                .concat({} as IImageProps) // Item fake para ser substituído pelo vídeo no carrossel de imagens
                .concat(featuredProduct.imagens)
        )
    }, [featuredProduct])

    const handleAddProduct = useCallback(
        (showAfterRequest: boolean, quantity?: number) => {
            dispatch(
                addProductToCart({
                    sku: product.codigo,
                    quantity: quantity ? quantity : quantityItems,
                    showAfterRequest,
                    GA: getGACartItemsParams({
                        product,
                        qty: quantity ? quantity : quantityItems
                    })
                })
            )
        },
        [dispatch, product, quantityItems]
    )

    const handleFavoriteProduct = useCallback(() => {
        if (user || objectIsEmpty(user)) {
            router.push(`/identificacao?ReturnUrl=/${product.permalink}`)
        } else if (isFavorite) {
            addNotices({
                type: 'warn',
                messages: [
                    `Deseja excluir ${product.nome} dos seus favoritos?`
                ],
                needConfirmation: true,
                action: () => {
                    dispatch(
                        removeFavorite({
                            productId: product.id,
                            sku: product.permalink
                        })
                    )

                    setIsFavorite(false)

                    setTimeout(() => {
                        addNotices({
                            type: 'success',
                            messages: [
                                `${product.nome} foi removido dos seus favoritos!`
                            ]
                        })
                    }, 1000)
                }
            })
        } else {
            dispatch(
                setFavorite({
                    clientId: user.id,
                    productId: product.id,
                    sku: product.permalink
                })
            )

            setIsFavorite(true)

            addNotices({
                type: 'success',
                messages: [`${product.nome} foi salvo nos seus favoritos!`]
            })
        }
    }, [product, isFavorite])

    return (
        <S.Container className="product">
            <Gallery
                images={featuredProductImages}
                videoUrl={featuredProduct.videoUrl}
                setShowProductVideo={setShowProductVideo}
            />

            <Swiper
                ref={swiperRef}
                spaceBetween={0.1}
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                loop={featuredProductImages.length > 1}
                navigation={featuredProductImages.length > 1}
                speed={0}
            >
                {featuredProductImages.map((item, index) => (
                    <>
                        {index !== 1 && !showProductVideo ? (
                            <SwiperSlide
                                key={index}
                                className="product-image-item"
                            >
                                {pathname !== '/[slug]' ? (
                                    <Link
                                        href={featuredProduct.permalink}
                                        passHref
                                    >
                                        <a href="">
                                            <img
                                                src={item.grande}
                                                alt={product.nome}
                                                id="product-image"
                                                className="product-image"
                                            />
                                        </a>
                                    </Link>
                                ) : (
                                    <img
                                        src={item.grande}
                                        alt={product.nome}
                                        id="product-image"
                                        className="product-image"
                                    />
                                )}
                            </SwiperSlide>
                        ) : (
                            <>
                                {((featuredProduct.videoUrl !== null &&
                                    featuredProduct.videoUrl !== '') ||
                                    showProductVideo) && (
                                    <SwiperSlide
                                        key={index}
                                        className="product-video"
                                    >
                                        {pathname !== '/[slug]' ? (
                                            <Link
                                                href={featuredProduct.permalink}
                                                passHref
                                            >
                                                <a href="">
                                                    <video
                                                        autoPlay
                                                        loop
                                                        muted
                                                        id="product-video"
                                                    >
                                                        <source
                                                            src={
                                                                featuredProduct.videoUrl
                                                            }
                                                            type="video/mp4"
                                                        />
                                                        Seu navegador não
                                                        suporta a tag de vídeo.
                                                    </video>
                                                </a>
                                            </Link>
                                        ) : (
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                id="product-video"
                                            >
                                                <source
                                                    src={
                                                        featuredProduct.videoUrl
                                                    }
                                                    type="video/mp4"
                                                />
                                                Seu navegador não suporta a tag
                                                de vídeo.
                                            </video>
                                        )}
                                    </SwiperSlide>
                                )}
                            </>
                        )}
                    </>
                ))}
            </Swiper>

            <div className="info">
                <h4 className="product-name">{featuredProduct.nome}</h4>

                <div className="payment-methods-with-old-price">
                    {featuredProduct.precoDe > 0 && (
                        <div className="product-price-old">
                            de <span>{featuredProduct.precoDeTexto}</span> por
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
                    {featuredProduct.disponivel && sizeSelected?.disponivel ? (
                        <Button onClick={() => handleAddProduct(true)}>
                            Adicionar ao carrinho
                        </Button>
                    ) : (
                        <Button disabled>Esgotado</Button>
                    )}

                    <span
                        className={`${
                            isFavorite ? 'favorite' : 'not-favorite'
                        }`}
                        onClick={handleFavoriteProduct}
                    >
                        {isFavorite ? <TiHeart /> : <TiHeartOutline />}
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
    )
}
