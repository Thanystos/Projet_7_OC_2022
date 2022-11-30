import styled from "styled-components"
import DropDown from "../../components/Dropdown"
import aboutImg from "../../assets/images/aboutImg.png"

const AboutWrapper = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (min-width: 635px) {
        padding-bottom: 263px;
    }
`

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 200px);
    min-width: 335px;
    
    @media screen and (max-width: 635px) {
        width: 335px;
    }
`

const AboutImgContainer = styled.div`
    height: 223px;
    border-radius: 25px;
    width: 100%;
`

const AboutImg = styled.img`
    filter: brightness(60%);
    object-fit: cover;
    border-radius: 25px;
    width: 100%;
    height: 223px;
`

const DropDownContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 200px);
    min-width: 335px;
    margin-top: 31px;

    @media screen and (max-width: 635px) {
        width: 100%;
        margin-top: 19px;
    }
`

function About() {
    const aboutDescription = [
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.',
        'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
    ]
    return (
        <AboutWrapper>
            <AboutContainer>
                <AboutImgContainer>
                    <AboutImg src={aboutImg} />
                </AboutImgContainer>
                <DropDownContainer>
                    <DropDown 
                        title='Fiabilité' 
                        description={aboutDescription[0]}
                        renting={false}
                    />
                    <DropDown 
                        title='Respect' 
                        description={aboutDescription[1]}
                        renting={false}
                    />
                    <DropDown 
                        title='Service' 
                        description={aboutDescription[2]}
                        renting={false}
                    />
                    <DropDown 
                        title='Sécurité' 
                        description={aboutDescription[3]}
                        renting={false}
                    />
                </DropDownContainer>
            </AboutContainer>
        </AboutWrapper>
    )
}

export default About