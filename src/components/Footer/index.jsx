import styled from "styled-components"
import footerLogo from '../../assets/images/footerLogo.png'
import { Link } from "react-router-dom"

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0px auto;
    padding: 66px 0px 29px 0px;
    background-color: black;
    width: 100%;
    position: absolute;
        bottom: 0;
        left: 0;

    @media screen and (max-width: 635px) {
        padding: 62px 0px 62px 0px;
        min-width: 375px;
    }
`

const FooterLogo = styled.img`
    width: 122px;
    height: 39px;
`

const FooterRights = styled.div`
    height: 46px;
    line-height: 46px;
    font-size: 24px;
    color: white;

    @media screen and (max-width: 635px) {
            font-size: 12px;
    }

    @media screen and (min-width: 635px) and (max-width: 900px) {
        font-size: 18px;
    }
`

function Footer() {
    return (
        <FooterContainer>
             <Link to="/">
                <FooterLogo src={footerLogo} />
            </Link>
            <FooterRights>
                © 2020 Kasa All rights reserved
            </FooterRights>
        </FooterContainer>
    )
}

export default Footer