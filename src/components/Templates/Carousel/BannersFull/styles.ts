import styled from 'styled-components'

export const Container = styled.div`
    padding-bottom: 1rem;

    img,
    video {
        width: 100%;
        height: 100%;
        max-height: 25rem;
    }

    .swiper {
        overflow: visible;
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

    .swiper .swiper-pagination {
        bottom: -1rem !important;
    }

    .swiper .swiper-pagination-bullet {
        transition: all 0.3s ease;
    }

    .swiper .swiper-pagination .swiper-pagination-bullet-active {
        width: 1rem;
        border-radius: 0.4rem;
        background-color: var(--primary_color);
    }

    @media (max-width: 1200px) {
        .swiper .swiper-button-prev {
            left: 0;
        }

        .swiper .swiper-button-next {
            right: 0;
        }
    }

    @media (max-width: 726px) {
        img {
            border-radius: 0;
        }

        .swiper-button-prev,
        .swiper-button-next {
            display: none;
        }
    }
`
