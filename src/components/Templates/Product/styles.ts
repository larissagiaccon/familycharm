import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    height: max-content;

    .featured-product-image {
        flex: 1;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .swiper {
        flex: 1;
        height: 100%;
        width: 100%;
        user-select: none;

        @keyframes entryButtonPrevAnimation {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes exitButtonPrevAnimation {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }

        @keyframes entryButtonNextAnimation {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes exitButtonNextAnimation {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }

        .swiper-button-prev,
        .swiper-button-next {
            width: 3rem;
            height: 3rem;
            cursor: pointer;
            opacity: 0.7;
            border-radius: 70%;
            background-color: var(--white);
            color: var(--gray);
            opacity: 0;
        }

        .swiper-button-prev:after,
        .swiper-button-next:after {
            font-size: 1.2rem;
            font-weight: 700;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
            opacity: 1;
            transition: opacity 0.4s;
        }

        &:hover {
            .swiper-button-prev {
                opacity: 1;
                animation: entryButtonPrevAnimation 1s;
            }

            .swiper-button-next {
                opacity: 1;
                animation: entryButtonNextAnimation 1s;
            }
        }

        &:not(:hover) {
            .swiper-button-prev {
                animation: exitButtonPrevAnimation 1s;
            }

            .swiper-button-next {
                animation: exitButtonNextAnimation 1s;
            }
        }
    }

    .info {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-top: 2rem;
        gap: 1rem;

        .product-name {
            text-align: start;
            font-weight: 400;
            margin-bottom: 1rem;
        }

        .payment-methods-with-old-price {
            display: flex;
            flex-direction: column;

            p {
                font-size: 0.8rem;
            }

            .product-price-old {
                gap: 0.2rem;
                font-size: 0.8rem;
                color: var(--gray_500);

                span {
                    text-decoration: line-through;
                }
            }

            .payment-methods {
                display: grid;
                grid-template-columns: repeat(2, 1fr);

                .payment-method-pix,
                .payment-method-credit-card {
                    display: flex;
                    flex-direction: column;
                    gap: 0.3rem;

                    .payment-method-pix-icon-price,
                    .payment-method-credit-card-icon-price {
                        display: flex;
                        align-items: center;
                        gap: 0.3rem;
                    }

                    > p {
                        margin-left: 1.3rem;
                    }
                }

                .payment-method-pix {
                    .pix-icon {
                        color: var(--pix_color);
                    }

                    .product-price {
                        font-size: 1.6rem;
                        font-weight: 700;
                        position: relative;

                        .tag-discount {
                            position: absolute;
                            top: 20%;
                            right: -3rem;
                            font-weight: 400;
                            color: var(--white);
                            background-color: var(--pix_color);
                            padding: 0.1rem 0.2rem;

                            &::before {
                                content: '';
                                position: absolute;
                                background-color: var(--pix_color);
                                top: 50%;
                                left: 0;
                                transform: translate(-82%, -50%);
                                clip-path: polygon(100% 0, 0% 50%, 100% 100%);
                                height: calc(100% - 0.3rem);
                                width: 0.5rem;
                            }
                        }
                    }
                }

                .payment-method-credit-card {
                    span {
                        font-size: 1.4rem;
                    }
                }
            }
        }

        .variations-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            > div {
                display: flex;
                gap: 0.5rem;
                user-select: none;
            }

            .variation-color {
                width: 3rem;
                height: 3rem;
                object-fit: cover;
                border-radius: 0.2rem;
                cursor: pointer;
            }

            .variation-size {
                height: auto;
                width: auto;
                padding: 0.2rem 0.4rem;
                text-align: center;
                font-size: 0.9rem;
                border: 1px solid var(--gray_400);
                border-radius: 0.2rem;
                cursor: pointer;
            }

            .unavailable {
                position: relative;
                opacity: 0.6;

                &::after {
                    content: '';
                    position: absolute;
                    width: 110%;
                    height: 1.5px;
                    background-color: #c21;
                    transform-origin: center;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) rotate(-45deg);
                }
            }

            .selected:not(.unavailable) {
                border: 1px solid #000;
            }
        }

        button {
            font-size: 0.9rem;
            font-weight: 500;
            width: 100%;

            &.unavailable {
                text-transform: none;
            }
        }

        .buttons-group {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;

            span {
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid var(--primary_color);
                border-radius: 50%;
                width: 3rem;
                cursor: pointer;

                svg {
                    width: 1.5rem;
                    height: 1.5rem;
                }

                &.favorite {
                    background-color: var(--primary_color);
                    color: var(--white);
                }

                &.not-favorite {
                    background-color: var(--white);
                    color: var(--primary_color);
                }
            }
        }
    }

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }
`
