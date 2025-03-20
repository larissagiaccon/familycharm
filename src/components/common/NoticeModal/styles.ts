import styled from 'styled-components'

export const Container = styled.div`
    min-height: 10rem;
    max-width: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    text-align: center;

    svg {
        width: 100%;
        height: 100%;
        max-width: 4rem;
        max-height: 4rem;
        margin-bottom: 1rem;

        &.warning-icon {
            color: #ffff00;
        }

        &.success-icon {
            color: #02ac66;
        }

        &.error-icon {
            color: #ef280f;
        }
    }

    h3 {
        font-size: 1.4rem;
        font-weight: 900;
        margin-top: 0.8rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    li {
        color: var(--text_color);
        font-size: 1.2rem;
        font-weight: 700;
    }

    li:first-child {
        margin-top: 1rem;
    }

    @media (max-width: 768px) {
        width: 100%;
        min-width: 20rem;
        min-height: 15rem;

        li {
            font-size: 1.2rem;
        }

        .icon {
            width: 100%;
            max-width: 4rem;
            height: 100%;
            max-height: 4rem;
        }
    }

    @media (max-width: 580px) {
        li {
            font-size: 1rem;
            padding: 0 1rem;
        }
    }

    @media (max-width: 300px) {
        padding: 2.2rem 0 0 0;
        min-width: 15rem;
    }
`
