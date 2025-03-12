import styled, { css } from 'styled-components'

interface IContentProps {
    hoverEffect: boolean
}

export const Container = styled.div<IContentProps>`
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 100%;
    cursor: pointer;
    position: relative;
    text-align: center;
    width: 100%;

    svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    .product-item-details {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .product-prices-installment {
        height: 4.3rem;
        margin-top: 0.5rem;
    }

    .product-name {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        height: 2.4rem;
        margin-top: 0.5rem;
        text-align: center;
    }

    .product-old-price {
        opacity: 0.6;
        text-decoration: line-through;
        text-align: center;
        height: 1.2rem;
    }

    .product-price {
        height: 1.7rem;
    }

    .product-installment {
        font-size: 0.8rem;
        margin-top: 0.5rem;
        height: 1rem;
    }

    .product-price {
        b {
            font-size: 1.4rem;
        }
    }

    .see-details {
        display: flex;
        align-items: center;
        align-self: center;
        gap: 0.5rem;
        padding: 0.5rem;
        border-radius: 0.2rem;
        margin-top: 0.5rem;

        &:hover {
            background-color: var(--gray_000);
            opacity: 0.8;
        }
    }

    @media (max-width: 768px) {
        width: 100%;

        ${props =>
            props.hoverEffect
                ? css`
                      .variations-group {
                          opacity: 1;
                          visibility: visible;
                      }

                      img {
                          transition: transform 0.5s ease-in-out;
                          transform: scale(1.05);
                      }
                  `
                : css``}

        .see-details {
            visibility: hidden;
        }
    }
`
