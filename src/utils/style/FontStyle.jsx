import { createGlobalStyle } from "styled-components";
import MontserratTtf from '../../assets/polices/Montserrat-Regular.ttf';

const FontStyle = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat-Regular';
        src: url(${ MontserratTtf }) format('ttf');
    }
`

export default FontStyle;