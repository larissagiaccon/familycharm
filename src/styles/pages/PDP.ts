import styled from 'styled-components'

export const Container = styled.div`
    padding: 2rem 4rem;

    .product {
        grid-template-columns: 0.3fr 2fr 2fr;

        .info {
            margin-top: 0;

            .product-name {
                font-size: 2rem;
            }
        }

        .gallery {
            display: flex;
        }

        .swiper {
            max-width: 30rem;
        }

        .product-image,
        video {
            border-radius: 0.4rem;
        }
    }

    .similar-products {
        margin-top: 4rem;
    }

    @media (max-width: 1000px) {
        .product .gallery {
            display: none;
        }
    }

    @media (max-width: 768px) {
        padding: 1rem;
    }
`
