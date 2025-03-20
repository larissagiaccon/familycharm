import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    gap: 1rem;
    position: relative;
    padding-top: 1rem;

    .icons-group {
        position: absolute;
        top: 1rem;
        right: 0;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;

        svg:hover {
            color: var(--primary_color);
        }
    }

    img {
        height: 100%;
        width: auto;
        max-width: 5rem;
        max-height: 10rem;
        border-radius: 0.4rem;
        object-fit: cover;
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 0.1rem;

        .item-counter {
            margin-top: 1rem;
        }
    }

    & + & {
        border-top: 1px solid var(--gray_000);
    }

    .modal-change-option {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        .modal-change-info {
            display: flex;
            gap: 1rem;
            border-right: 1px solid var(--gray_000);
        }

        .variations-group {
            padding-left: 1rem;
        }
    }
`
