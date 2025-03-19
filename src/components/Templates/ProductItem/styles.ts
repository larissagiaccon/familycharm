import styled, { css } from 'styled-components'

interface IContentProps {
    hoverEffect: boolean
}

export const Container = styled.div<IContentProps>`
    display: flex;
    flex-direction: column;
    width: 20rem;
    cursor: pointer;
    position: relative;
    text-align: center;
    justify-self: center;
    width: 100%;

    @keyframes entryProductOptionsGroupAnimation {
        from {
            opacity: 0;
            transform: translateX(5%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes exitProductOptionsGroupAnimation {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }

    .product-options-group {
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        position: absolute;
        top: 0.5rem;
        right: 1rem;
        opacity: 0;

        .see-details:hover,
        .favorite:hover {
            color: var(--primary_color);
        }
    }

    &:hover {
        .product-options-group {
            opacity: 1;
            animation: entryProductOptionsGroupAnimation 1s;
        }
    }

    &:not(:hover) {
        .product-options-group {
            animation: exitProductOptionsGroupAnimation 0.3s;
        }
    }

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

    @media (max-width: 768px) {
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
