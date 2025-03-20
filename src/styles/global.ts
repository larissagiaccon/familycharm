import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --primary_color: #a48;
        --secondary_color: #e7a187;
        --text_color: #FFF;
        --background_color: #000;
        --images_size: 1 / 1;
        --default_showcase_mobile: repeat(2, 1fr);

        --white: #fff;

        --gray_000: #efefef;
        --gray_100: #dddddd;
        --gray_200: #d9d9d9;
        --gray_300: #bcbcbc;
        --gray_400: #aaaaaa;
        --gray_500: #787878;
        --gray_600: #656565;
        --gray_700: #555555;
        --gray_800: #303030;

        --red_000: #ff6961;
        --red_100: #ff0000;
        --red_200: #950101;

        --pix_color: #77b6a8;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
    }

    body {
        background: var(--background_color);
        color: var(--text_color);
        font: 400 16px Roboto, sans-serif;
    }

    h1 {
        font-size: clamp(2rem, 6vw, 9rem);
        font-weight: 700;
    }

    h2 {
        font-size: clamp(1.5rem, 6vw, 6rem);
        font-weight: 700;
    }

    h3 {
        font-size: clamp(1rem, 2vw, 3rem);
    }

    h4 {
        font-size: 1rem;
    }

    input {
        border: none;
        outline: none;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
        object-fit: contain;
        aspect-ratio: var(--images_size);
    }

    svg {
        cursor: pointer;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        list-style-type: none;
        margin: 0;
    }

    .variations-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        > div {
            display: flex;
            gap: 0.5rem;
            user-select: none;
        }

        .variation-color {
            width: 1rem;
            height: 1rem;
            object-fit: cover;
            border-radius: 0.2rem;
            cursor: pointer;
        }

        .variation-size {
            height: auto;
            width: auto;
            max-width: max-content;
            padding: 0.2rem 0.4rem;
            text-align: center;
            background-color: var(--white);
            font-size: 0.9rem;
            border: 1px solid var(--gray_400);
            border-radius: 0.2rem;
            cursor: pointer;
        }
    }

    .unavailable {
        position: relative;
        opacity: 0.6;

        &::after {
            content: '';
            position: absolute;
            width: 110%;
            height: 1.5px;
            background-color: #c21;
            transform-origin: center;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    }

    .selected:not(.unavailable) {
        border: 1px solid #000;
    }
`
