import styled from 'styled-components'

export const Container = styled.div`
    .content.fixed,
    .header-mobile.fixed {
        position: fixed;
        width: 100%;
        z-index: 999;
    }

    .logo {
        width: 100%;
        max-height: 4rem;
    }

    svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    #height-swap,
    #height-swap-mobile {
        display: none;
    }

    @keyframes entrySearchAnimation {
        from {
            opacity: 0;
            transform: translateX(5%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes exitSearchAnimation {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(5%);
        }
    }

    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--primary_color);
        padding: 1rem 4rem;

        .menu-sandwich {
            display: none;
        }

        > div:not(.search) {
            display: flex;
            gap: 2rem;
            cursor: pointer;

            > div {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
        }

        .input-search {
            animation: entrySearchAnimation 0.3s;

            &.closing {
                animation: exitSearchAnimation 0.3s;
            }
        }
    }

    .input-search {
        display: flex;
        flex-direction: row;
        height: 2.4rem;
        width: clamp(340px, 33vw, 400px);

        input {
            width: 100%;
            height: 100%;
            border-radius: 0.4rem 0 0 0.4rem;
            padding: 0 1rem;
        }

        button {
            height: 100%;
            padding: 0.5rem 0.6rem;
            border: none;
            border-radius: 0 0.4rem 0.4rem 0;
            background-color: var(--secondary_color);

            &:hover {
                opacity: 0.9;
            }

            svg {
                width: 1rem;
                height: 1rem;
            }
        }
    }

    .my-account-or-sign-out {
        display: flex;
        align-items: flex-end;

        a {
            padding-right: 0.2rem;
        }
    }

    .cart-itens {
        position: relative;

        &.have-items p {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1rem;
            height: 1rem;
            background-color: var(--secondary_color);
            border-radius: 50%;
            position: absolute;
            top: 0.2rem;
            right: -0.3rem;
            font-size: 0.6rem;
            padding: 0.1rem;
            user-select: none;
        }
    }

    @media (max-width: 1000px) {
        font-size: 0.8rem;

        .content {
            padding: 2rem;
        }
    }

    @media (max-width: 880px) {
        .content {
            .menu-sandwich {
                display: flex;
            }

            > div > div.user-info {
                display: none;
            }
        }
    }

    @media (max-width: 768px) {
        border-radius: 0 0 1rem 1rem;

        > .content {
            display: none;
        }
    }
`
