import styled from 'styled-components'

export const Container = styled.div`
    padding: 2rem;

    &.insufficient-items .swiper-wrapper {
        justify-content: space-around;
    }

    .product-carousel-item {
        display: flex;
        justify-content: center;
    }

    .swiper .swiper-button-prev,
    .swiper .swiper-button-next {
        width: 3rem;
        height: 3rem;
        cursor: pointer;
        opacity: 0.7;
        border-radius: 70%;
        background-color: var(--white);
        color: var(--gray);
    }

    .swiper .swiper-button-prev:after,
    .swiper .swiper-button-next:after {
        font-size: 1.2rem;
        font-weight: 700;
    }

    .swiper .swiper-button-prev:hover,
    .swiper .swiper-button-next:hover {
        opacity: 1;
        transition: opacity 0.4s;
    }

    @media (max-width: 768px) {
        .swiper,
        .swiper-button-prev,
        .swiper-button-next {
            display: none;
        }
    }
`
