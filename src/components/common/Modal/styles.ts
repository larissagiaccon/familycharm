import styled from 'styled-components'

interface IModalProps {
    withScroll: boolean
}

export const ContainerWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.16);
    padding: 0 1.6rem;

    @keyframes opacityEntryAnimation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    animation: opacityEntryAnimation 0.3s;

    @media (max-width: 768px) {
        .modal-container-wrapper {
            padding: 0;
        }
    }
`

export const Container = styled.div<IModalProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    background: var(--white);
    margin: 2.4rem;
    min-width: 36rem;
    max-width: 90vw;
    max-height: 90vh;
    min-height: 20rem;
    padding: 2rem;
    height: min-content;
    overflow-y: auto;
    overflow-x: hidden;

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

    @keyframes opacityExitAnimation {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    &.closing {
        animation: opacityExitAnimation 0.3s;
    }

    .close-icon {
        cursor: pointer;
        position: absolute;
        top: 0.8rem;
        right: 0.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        font-size: 1.4rem;
        color: var(--primary_color);

        &:hover {
            color: var(--secondary_color);
        }
    }

    .modal-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    h4 {
        color: var(--text_color);
        font-size: 1.6rem;
        font-weight: 800;
        text-align: center;
        margin-bottom: 3rem;
    }

    button {
        margin-top: 1rem;
        align-self: center;
    }

    .group-buttons {
        display: flex;
        gap: 1rem;
        margin-top: 3rem;
        align-self: center;

        button {
            margin-top: 0;
            font-size: 0.8rem;
            min-width: 6rem;
            padding: 0.2rem 0.4rem;
        }
    }

    &.modal-see-more-details-modal {
        padding: 0 1rem 0 0;
        max-width: 60vw;
        overflow: hidden;
        height: 100%;

        .modal-content {
            height: 100%;
        }
    }

    @media (max-width: 1270px) {
        &.modal-see-more-details-modal {
            max-width: 70vw;
        }
    }

    @media (max-width: 1100px) {
        &.modal-see-more-details-modal {
            max-width: 80vw;
        }
    }

    @media (max-width: 1000px) {
        &.modal-see-more-details-modal {
            padding: 0;
            overflow: auto;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        min-width: 20rem;
        min-height: 15rem;

        &.canClose {
            padding-right: 1rem;
        }

        .modal-content {
            height: 100%;
            max-height: 80vh;
            margin-top: 2rem;
        }
        h4 {
            font-size: 1.2rem;
        }

        &.modal-see-more-details-modal {
            display: none;
        }
    }

    @media (max-width: 300px) {
        padding: 2.2rem 0 0 0;
        min-width: 15rem;
    }
`
