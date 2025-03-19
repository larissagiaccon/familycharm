import styled from 'styled-components'

export const Container = styled.button`
    cursor: pointer;
    min-height: 2.4rem;
    width: max-content;
    padding: 0.8rem 1.2rem;
    border: 0;
    border-radius: 2rem;
    background: var(--primary_color);
    border: 1px solid var(--primary_color);

    color: var(--white);
    font-size: 0.7rem;
    text-transform: uppercase;
    font-weight: 700;

    transition: 0.3s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    &.button-component:not(:disabled):hover {
        opacity: 0.8;
    }

    &:not(:disabled):hover {
        color: var(--primary_color);
        background: var(--white);
    }

    &.outline {
        background: var(--white);
        color: var(--primary_color);

        &:not(:disabled):hover {
            color: var(--white);
            background: var(--primary_color);
        }
    }
`
