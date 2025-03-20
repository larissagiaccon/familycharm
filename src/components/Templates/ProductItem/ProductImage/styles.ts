import styled, { css } from 'styled-components'

interface IContentProps {
    hoverEffect: boolean
}

export const Container = styled.div`
    display: flex;
    position: relative;
    align-self: center;
    overflow: hidden;
    height: 100%;
    border-radius: 0.4rem;

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
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        opacity: 0;

        .see-details:hover,
        .favorite:hover {
            color: var(--primary_color);
        }
    }

    .variations-group {
        align-items: center;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.7);
        padding: 0.7rem 0;

        position: absolute;
        bottom: 0;

        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s ease;

        .variation-size {
            cursor: default;
        }
    }

    &:hover {
        .variations-group {
            opacity: 1;
            visibility: visible;
        }

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

    @media (max-width: 768px) {
        .variations-group .variation-color {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`

export const Content = styled.a<IContentProps>`
    display: flex;
    width: 100%;
    height: 100%;

    img,
    video {
        height: auto;
        width: 100%;
        max-width: 100%;
        max-height: 30rem;
        border-radius: 0.4rem;
        object-fit: cover;
    }

    > * {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease;
    }

    > *:nth-child(2) {
        position: absolute;
    }

    ${props =>
        props.hoverEffect
            ? css`
                  > *:first-child {
                      opacity: 0;
                      visibility: hidden;
                  }

                  > *:nth-child(2) {
                      opacity: 1;
                      visibility: visible;
                  }
              `
            : css`
                  > *:first-child {
                      opacity: 1;
                      visibility: visible;
                  }

                  > *:nth-child(2) {
                      opacity: 0;
                      visibility: hidden;
                  }
              `}

    @media (max-width: 768px) {
        > *:first-child {
            opacity: 1;
            visibility: visible;
        }

        > *:nth-child(2) {
            opacity: 0;
            visibility: hidden;
        }

        img,
        video {
            max-width: 20rem;
        }
    }
`
