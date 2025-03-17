import styled from 'styled-components'

export const Container = styled.aside`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    > button {
        border: 1px solid var(--primary_color);
        gap: 0.4rem;
        width: 9rem;
        margin-bottom: 2rem;
    }
`
