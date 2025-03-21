import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    display: flex;
    max-height: 40rem;
    display: none;

    .arrow-up-icon,
    .arrow-down-icon {
        position: absolute;
        cursor: pointer;
        left: 40%;

        transition: 0.3s;
        filter: grayscale(0);

        &:hover {
            filter: grayscale(100%);
        }
    }

    .arrow-up-icon {
        top: -2rem;
    }

    .arrow-down-icon {
        bottom: -1rem;
    }

    .left-carousel {
        overflow: hidden;
        height: 100%;

        #scroller {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            flex-direction: column;
            transition: 0.3s transform;
        }

        .image-carousel,
        video {
            cursor: pointer;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0.4rem;
            border: 1px solid var(--gray_100);
            transition: 0.3s;
            object-fit: cover;
            aspect-ratio: var(--images_size);

            &:hover {
                opacity: 0.8;
                border-color: var(--gray_700);
                transition: 0.17s;
            }

            &.active {
                border-color: var(--gray_500);
            }
        }

        .video-container {
            position: relative;
            display: inline-block;

            button {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(0, 0, 0, 0.5);
                color: white;
                border: none;
                border-radius: 50%;
                padding: 10px 15px;
                font-size: 20px;
                cursor: pointer;
            }
        }
    }

    @media (max-width: 768px) {
        &.have-correlatos {
            display: none;
        }

        .left-carousel {
            max-height: 17rem;
        }

        .arrow-up-icon {
            top: -1.2rem;
        }

        .arrow-down-icon {
            bottom: -1.2rem;
        }
    }

    @media (max-width: 520px) {
        max-height: 11rem;

        .left-carousel #scroller {
            gap: 1rem;
        }

        .left-carousel .image-carousel {
            width: 80%;
        }
    }

    @media (max-width: 400px) {
        .left-carousel {
            max-height: 7rem;
        }
    }
`
