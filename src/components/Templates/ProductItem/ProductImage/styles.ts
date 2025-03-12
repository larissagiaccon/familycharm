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

    .favorite-product svg {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
    }

    .variations-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.7);
        padding: 0.7rem 0;

        position: absolute;
        bottom: 0;

        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s ease;

        > div {
            display: flex;
            gap: 0.5rem;
        }

        p {
            border: 1px solid var(--gray_300);
            border-radius: 0.2rem;
        }

        .variation-color {
            width: 1rem;
            height: 1rem;
        }

        .variation-size {
            height: auto;
            width: auto;
            padding: 0.2rem 0.4rem;
            text-align: center;
            background-color: var(--white);
            font-size: 0.9rem;
        }
    }

    .unavailable {
        position: relative;
        opacity: 0.6;

        ::after {
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

    .variations-group p.selected {
        border: 1px solid #000;
    }

    &:hover {
        .variations-group {
            opacity: 1;
            visibility: visible;
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
        aspect-ratio: var(--images_size);
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
