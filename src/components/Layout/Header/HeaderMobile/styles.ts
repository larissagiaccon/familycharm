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

    @keyframes entrySearchMobileAnimation {
        from {
            opacity: 0;
            transform: translateY(-5%);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes exitSearchMobileAnimation {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-5%);
        }
    }

    .search {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 1rem;
        gap: 0.5rem;

        animation: entrySearchMobileAnimation 0.3s;

        &.closing {
            animation: exitSearchMobileAnimation 0.3s;
        }

        .close-search {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
        }
    }

    @media (max-width: 768px) {
        display: flex;
    }
`
