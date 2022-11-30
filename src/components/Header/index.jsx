import { Link } from 'react-router-dom'
import styled from 'styled-components'
import navLogo from '../../assets/images/navLogo.png'
import { StyledLink } from '../../utils/style/Atoms'

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 200px);
    max-width: 1240px;
    height: 68px;
    margin: 40px auto 63px auto;

    @media screen and (max-width: 375px) {
        width: 100%;
        height: 47px;
        margin: 20px auto 16px auto;
    }
`

const NavLogo = styled.img`
    width: 210.32px;
    height: 68px;

    @media screen and (max-width: 375px) {
        width: 145px;
        height: 47px;
    }
`

const StyledLinkContainer = styled.div`
    margin-left: 70px;

    @media screen and (max-width: 375px) {
        margin-left: 10px;
    }
`

const NavLink = styled.div`
    display: flex;
    justify-content: right;
    height: 34px;
    font-size: 24px;

    @media screen and (max-width: 375px) {
        height: 17px;
        font-size: 12px;
    }
`

function Header() {
    return (
        <NavContainer>
            <Link to="/">
                <NavLogo src={navLogo} />
            </Link>
            <NavLink>
                <StyledLinkContainer>
                    <StyledLink to="/">
                        Accueil
                    </StyledLink>   
                </StyledLinkContainer>
                <StyledLinkContainer>
                    <StyledLink to="A-Propos">
                        A Propos
                    </StyledLink>
                </StyledLinkContainer>   
            </NavLink>
        </NavContainer>
    )
}

export default Header