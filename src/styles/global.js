import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: thin;
        scrollbar-color: #FF859B #FFFFFF;
    }
    *::-webkit-scrollbar {
        width: 8px;
    }
    *::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: #FF859B;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE_200};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }
    
    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`