import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat-Regular';
        font-weight: 500;
    }

    body {
        margin: 0px;
    }

    h1, h2, h3 {
        margin: 0px;
    }

    ul {
        margin: 0px;
        padding: 0px;
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle