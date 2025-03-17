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
`
