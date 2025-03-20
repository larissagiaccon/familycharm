import styled from 'styled-components'

export const ContainerWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    height: 100%;
    width: 100%;
    z-index: 1000;

    background: transparent;
`

export const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 25rem;
    height: 100%;
    z-index: 999;
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    padding: 2.5rem 2rem 2rem 2rem;
    border-top-left-radius: 5rem;
    box-shadow: 5px 10px 15px #bcbcbc;

    @keyframes transformEntryAnimation {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes transformExitAnimation {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(100%);
        }
    }

    animation: transformEntryAnimation 0.3s;

    &.closing {
        animation: transformExitAnimation 0.3s;
    }

    .mini-cart-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid var(--gray_000);
        padding-bottom: 1rem;

        h3 {
            font-size: 1.6rem;
            font-weight: 400;
        }

        .x-icon {
            width: 1.3rem;
            height: 1.3rem;

            &:hover {
                color: var(--primary_color);
            }
        }
    }

    .mini-cart-products-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-right: 0.5rem;
        overflow-y: auto;
        overflow-x: hidden;
        margin-top: 1rem;

        /* Fundo da trilha (track) transparente */
        ::-webkit-scrollbar-track {
            background: transparent !important;
        }

        /* Configuração principal da barra de rolagem */
        ::-webkit-scrollbar {
            width: 0.6rem;
            background: transparent;
        }

        /* Cor do thumb (a parte arrastável) */
        ::-webkit-scrollbar-thumb {
            background: var(--primary_color);
            border-radius: 1rem;
            border: 2px solid transparent; /* Faz com que o fundo pareça transparente */
            background-clip: padding-box; /* Garante que a cor do fundo não vaze */
        }

        /* Para navegadores que não usam WebKit */
        scrollbar-color: var(--primary_color) transparent;
        scrollbar-width: thin;
    }

    .mini-cart-buttons {
        display: flex;
        flex-direction: column;
        margin-top: auto;
        gap: 0.5rem;
        margin-top: auto;
        padding-top: 1rem;

        button {
            width: 100%;
        }
    }
`
