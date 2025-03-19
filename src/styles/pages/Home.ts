import styled from 'styled-components'

export const Container = styled.div`
    .banners-full {
        margin-bottom: 1rem;
    }

    .components-group {
        padding: 1rem 0;

        .component-title {
            display: flex;
            align-items: center;
            font-weight: 400;
            white-space: nowrap;
            justify-self: center;
            position: relative;
            gap: 4rem;
            padding: 0 1em;

            &::before,
            &::after {
                content: '';
                display: block;
                width: 20rem;
                height: 1px;
                background-color: var(--primary_color);
                opacity: 0.8;
            }
        }
    }

    @media (max-width: 768px) {
        .components-group .component-title {
            gap: 1rem;
            padding: 0 0.5em;

            &::before,
            &::after {
                width: 10rem;
            }
        }
    }

    @media (max-width: 410px) {
        .components-group .component-title {
            gap: 0;
            padding: 0;
            white-space: normal;
            flex-direction: column;

            &::after {
                margin-top: 0.3rem;
            }

            &::before {
                width: 0;
            }
        }
    }
`
