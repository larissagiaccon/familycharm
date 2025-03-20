import styled from 'styled-components'

export const Container = styled.div`
    background: var(--white);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: var(--primary_color);
    border: 1px solid var(--gray_100);
    border-radius: 2rem;

    max-width: 6rem;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.6rem;
        height: 100%;
        border: 0;
        background: transparent;
        font-size: 1rem;
        padding: 0.2rem;
        cursor: pointer;

        &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }
    }

    input {
        height: 100%;
        width: 100%;
        min-width: 1rem;
        max-width: 1.2rem;
        text-align: center;
        border: 0;
        font-size: 1rem;
        font-weight: 500;
        color: var(--primary_color);
    }

    @media (max-width: 450px) {
        button {
            font-size: 1rem;
            width: 2rem;
        }

        input {
            max-width: 2rem;
        }
    }
`
