import styled from 'styled-components'

export const Container = styled.div`
    display: none;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--primary_color);
    max-height: 10rem;

    .logo-mobile {
        max-height: 3rem;
    }

    .content-mobile {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 1rem;

        .header-mobile-group {
            display: flex;
            gap: 1rem;
        }
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
