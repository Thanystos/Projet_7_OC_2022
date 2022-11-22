import styled from "styled-components"
import colors from "../../utils/style/colors"
import { StyledLink } from "../../utils/style/Atoms"

const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #${colors.primary};
`

const NotFoundCode = styled.h1`
    height: 263px;
    line-height: 263px;
    font-size: 288px;
    font-weight: 700;
    margin-bottom: 66px;
`

const NotFoundMessage = styled.h2`
    height: 51px;
    line-height: 51px;
    font-size: 36px;
    margin-bottom: 182px;
`

const StyledLinkContainer = styled.div`
    font-size: 18px;
`

function PageNotFound() {
    return (
        <NotFoundContainer>
            <NotFoundCode>
                404
            </NotFoundCode>
            <NotFoundMessage>
                Oups ! La page que vous demandez n'existe pas.
            </NotFoundMessage>
            <StyledLinkContainer>
                <StyledLink to="/">
                    Retourner sur la page d'accueil
                </StyledLink>
            </StyledLinkContainer>
        </NotFoundContainer>
    )
}

export default PageNotFound