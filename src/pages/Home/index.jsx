import { Link } from 'react-router-dom'
import styled from 'styled-components'
import sloganImg from '../../assets/images/sloganImg.png'
import Card from '../../components/Card'

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1240px;
`

const SloganContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 223px;
    width: 100%;
    background-image: url(${ sloganImg });
    border-radius: 25px;
`

const SloganImg = styled.img`
    filter: brightness(60%);
    object-fit: contain;
    border-radius: 25px;
`

const Slogan = styled.h1`
    position: absolute;
    color: white;
    width: 705px;
    height: 68px;
    font-size: 48px;
    text-align: center;
`

const CardsContainer = styled.div.attrs({className: 'test'})`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    border-radius: 25px;
    padding: 56px 50px;
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