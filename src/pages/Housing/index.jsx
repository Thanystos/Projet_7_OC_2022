import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Slideshow from '../../components/Slideshow';
import Tag from '../../components/Tag';
import DropDown from '../../components/Dropdown';
import colors from '../../utils/style/colors'
import PageNotFound from '../../pages/PageNotFound'
import Star from '../../components/Star';

const RentingWrapper = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (min-width: 635px) and (max-width: 900px) {
        padding-bottom: 263px;
    }
`

const RentingContainer = styled.div`
    width: calc(100% - 200px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;

    @media screen and (max-width: 635px) {
        width: 335px;
    }
`

const RentingCommonInfos = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    color: #${colors.primary};

    @media screen and (max-width: 900px) {
        margin-top: 15px;
        flex-direction: column;
    }
`

const RentingLocationInfos = styled.div`
    display: flex;
    flex-direction: column;
`

const RentingLocationTitle = styled.h2`
    height: 51px;
    font-size: 36px;
    line-height: 51px;

    @media screen and (max-width: 635px) {
        font-size: 18px;
        height: 46px;
        margin-bottom: 5px;
    }

    @media screen and (min-width: 635px) and (max-width: 1350px) {
        font-size: 22px;
    }

    @media screen and (max-width: 1350px) {
        line-height: 25.67px;
    }
`

const RentingLocationSubtitle = styled.h3`
    height: 26px;
    font-size: 18px;
    line-height: 26px;

    @media screen and (max-width: 635px) {
        height: 22px;
        font-size: 14px;
        line-height: 22px;
    }

    @media screen and (min-width: 635px) and (max-width: 900px) {
        font-size: 18px;    
    }
`

const TagList = styled.div`
    display: flex;
    margin-top: 20px;

    @media screen and (max-width: 900px) {
        margin-top: 10px;
    }

`

const RentingLocationOwner = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    @media screen and (max-width: 900px) {
        height: 32px;
        margin-top: 16.5px;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }
`

const RentingLocationOwnerInfos = styled.div`
    display: flex;
    align-items: center;
    height: 64px;

    @media screen and (max-width: 900px) {
        height: 32px;
    }    
`

const RentingLocationOwnerName = styled.div`
    height: 52px;
    font-size: 18px;
    line-height: 52px;
    margin-right: 10px;

    @media screen and (max-width: 635px) {
        height: 33px;
        font-size: 12px;
        line-height: 33px;
        margin-right: 10.5px;
    }

    @media screen and (min-width: 635px) and (max-width: 900px) {
        font-size: 16px;
    }
`

const RentingLocationOwnerPictureContainer = styled.div`
    width: 64px;
    height: 64px;

    @media screen and (max-width: 900px) {
        width: 32px;
        height: 32px;
    }

    @media screen and (min-width: 635px) and (max-width: 900px) {
        width: 48px;
        height: 48px;
    }
`

const RentingLocationOwnerPicture = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: contain;

    @media screen and (max-width: 635px) {
        width: 32px;
        height: 32px;
    }

    @media screen and (min-width: 635px) and (max-width: 900px) {
        width: 48px;
        height: 48px;
    }
`

const StarList = styled.div`
    display: flex;
    justify-content: space-between;
    width: 190px;
    margin-top: 24px;

    @media screen and (max-width: 900px) {
        width: 95px;
        margin-top: 0px;
    }
`

const DropDownContainer = styled.div`
    width: 100%;
    margin-top: 24px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
        margin-top: 16.5px;
        flex-direction: column;
    }
`

function Housing() {
    const rentingId = useParams().id;
    const rentings = require('../../assets/logements.json');
    const renting = rentings.find((renting) => renting.id === rentingId)
    const stars = [0, 1, 2, 3, 4];

    if(renting === undefined) {
        return(<PageNotFound />)
    }
    else {
        return (
            <RentingWrapper>
                <RentingContainer>
                    <Slideshow 
                        pictures={renting.pictures}
                    />
                    <RentingCommonInfos>
                        <RentingLocationInfos>
                            <RentingLocationTitle>
                                {renting.title}
                            </RentingLocationTitle>
                            <RentingLocationSubtitle>
                                {renting.location}
                            </RentingLocationSubtitle>
                            <TagList>
                                {
                                    (renting.tags).map((tag, index) => (
                                        <Tag 
                                            key={index}
                                            title={tag}
                                        />
                                    ))
                                }
                            </TagList>
                        </RentingLocationInfos>
                        <RentingLocationOwner>
                            <RentingLocationOwnerInfos>
                                <RentingLocationOwnerName>
                                    {renting.host.name}
                                </RentingLocationOwnerName>
                                <RentingLocationOwnerPictureContainer>
                                    <RentingLocationOwnerPicture src={renting.host.picture} />
                                </RentingLocationOwnerPictureContainer>
                            </RentingLocationOwnerInfos>
                            <StarList>
                                {
                                    (stars).map((star, index) => (
                                        <Star
                                            key={index}
                                            index={star}
                                            rating={renting.rating}
                                        />
                                    ))
                                }
                            </StarList>
                        </RentingLocationOwner>
                    </RentingCommonInfos>
                    <DropDownContainer>
                        <DropDown
                            title = 'Description'
                            description={renting.description}
                            renting={true}
                        />
                        <DropDown
                            title = 'Équipements'
                            description={renting.equipments}
                            renting={true}
                        />
                    </DropDownContainer>
                </RentingContainer>
            </RentingWrapper>
        )
    }
}    

export default Housing