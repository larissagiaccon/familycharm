import styled from 'styled-components'

export const Container = styled.div`
    display: none;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: var(--primary_color);

    .logo {
        width: 100%;
        max-width: 10rem;
        max-height: 3rem;
    }

    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
    }

    .search {
        align-self: center;
        width: 100%;
        max-width: 25rem;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`
