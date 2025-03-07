import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --primary_color: #a48;
        --secondary_color: #e7a187;
        --text_color: #FFF;
        --background_color: #000;
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
`
