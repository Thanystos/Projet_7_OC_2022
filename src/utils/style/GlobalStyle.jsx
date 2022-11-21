import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat-Regular';
        font-weight: 500;
    }

    body {
        margin: 0px;
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle