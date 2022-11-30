import { createGlobalStyle } from "styled-components";
import MontserratTtf from '../../assets/polices/Montserrat-Regular.ttf';

const StyledGlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat-Regular';
        src: url(${MontserratTtf});
    }
    * {
        font-family: 'Montserrat-Regular';
        font-weight: 500;
    }

    body {
        margin: 0px;
        height: 100vh;
    }

    #root {
        max-width: 1440px;
        margin: auto;

        @media screen and (max-width: 375px) {
            width: 335px;
        }
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