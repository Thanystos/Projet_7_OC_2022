import { Link } from 'react-router-dom'
import styled from 'styled-components'
import navLogo from '../../assets/images/navLogo.png'
import { StyledLink } from '../../utils/style/Atoms'

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1240px;
    height: 68px;
    margin: 40px auto 68px auto;
`

const NavLogo = styled.img`
    width: 210.32px;
    height: 68px;
`

const StyledLinkContainer = styled.div`
    margin-left: 70px;
`

const NavLink = styled.div`
    display: flex;
    justify-content: right;
    height: 34px;
    font-size: 24px;
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