import React, { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import Grid from '../../Grid'
import ProductItem from '../../ProductItem'

import { IProductCarouselProps } from 'mocks/mockedProduct' // TODO REMOVER MOCK

import * as S from './styles'

interface ICarouselProps {
    products: IProductCarouselProps[]
    delay?: number
    speed?: number
}

const ProductCarousel: React.FC<ICarouselProps> = ({
    products,
    delay = 0,
    speed = 0
}) => {
    const swiperRef = useRef(null)

    const [windowWidth, setWindowWidth] = useState('web')

    const breakpoints = {
        820: {
            slidesPerView: products.length > 3 ? 3 : products.length,
            loop: products.length > 3
        },
        1024: {
            slidesPerView: products.length > 4 ? 4 : products.length,
            loop: products.length > 4
        },
        1600: {
            slidesPerView: products.length > 5 ? 5 : products.length,
            loop: products.length > 5
        }
    }

    function resizeWindow() {
        if (typeof window !== 'undefined') {
            if (window.innerWidth > 768) {
                setWindowWidth('web')
            } else {
                setWindowWidth('mobile')
            }
        }
    }

    useEffect(() => {
        resizeWindow()

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', resizeWindow)
        }
    }, [])

    return (
        <S.Container
            className={`product-carousel simple-swiper${
                products.length > 5 ? '' : ' insufficient-products'
            }`}
        >
            {windowWidth === 'web' ? (
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={2}
                    autoplay={{
                        delay,
                        disableOnInteraction: true,
                        pauseOnMouseEnter: true,
                        reverseDirection: true
                    }}
                    pagination={{ clickable: products.length > 2 }}
                    loop={products.length > 2}
                    navigation={products.length > 2}
                    speed={speed}
                    breakpoints={breakpoints}
                >
                    {products.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="product-carousel-item"
                        >
                            <ProductItem product={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <Grid products={products} />
            )}
        </S.Container>
    )
}

export default ProductCarousel
