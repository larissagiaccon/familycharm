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
        font-size: clamp(3rem, 6vw, 9rem);
        font-weight: 700;
    }

    h2 {
        font-size: clamp(2rem, 6vw, 6rem);
        font-weight: 700;
    }

    h3 {
        font-size: clamp(2.5rem, 2vw, 3rem);
    }

    h4 {
        font-size: 2.5rem;
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
`
