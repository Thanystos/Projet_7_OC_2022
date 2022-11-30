import { Link } from 'react-router-dom'
import styled from 'styled-components'
import sloganImg from '../../assets/images/sloganImg.png'
import Card from '../../components/Card'
import colors from '../../utils/style/colors'

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 200px);

    @media screen and (max-width: 375px) {
        width: 100%;
    }
`

const SloganContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    margin-bottom: 43px;

    @media screen and (max-width: 375px) {
        height: 111px;
        margin-bottom: 22px;
    }
`

const SloganImg = styled.img`
    filter: brightness(60%);
    object-fit: cover;
    border-radius: 25px;
    width: 100%;
    min-height: 111px;
    
    @media screen and (max-width: 375px) {
        height: 111px;
    }
`

const Slogan = styled.h1`
    position: absolute;
    color: white;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 375px) {
        width: 217px;
        font-size: 24px;
        text-align: left;
        left: 16px;
    }
`

const CardsContainer = styled.div.attrs({className: 'test'})`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    border-radius: 25px;
    padding: 56px 50px;
    background-color: #${colors.secondary};

    @media screen and (max-width: 375px) {
        background-color: white;
        padding: 0px;
    }
`

function Home() {
    const rentingsList = require('../../assets/logements.json');

    return (
        <HomeWrapper>
            <HomeContainer>
                <SloganContainer>
                    <SloganImg src={sloganImg} />
                    <Slogan>
                        Chez vous, partout et ailleurs
                    </Slogan>
                </SloganContainer>
                <CardsContainer>
                    {
                        rentingsList.map((renting, index) => (
                            <Link key={`renting-${renting.id}`} to={`/Fiche-Logement/${renting.id}`}>
                                <Card
                                    key={`${renting.title}-${index}`}
                                    title={renting.title}
                                    cover={renting.cover}
                                />
                            </Link>
                        ))
                    }
                </CardsContainer>
            </HomeContainer>
        </HomeWrapper>
    )
}

export default Home