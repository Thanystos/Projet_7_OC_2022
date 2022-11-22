import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Slideshow from '../../components/Slideshow';
import Tag from '../../components/Tag';
import DropDown from '../../components/Dropdown';
import colors from '../../utils/style/colors'
import emptiedStar from '../../assets/images/emptiedStar.png'
import filledStar from '../../assets/images/filledStar.png'
import { Navigate } from 'react-router-dom';

const RentingWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const RentingContainer = styled.div`
    width: 1240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`

const RentingCommonInfos = styled.div`
    width: 1240px;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    color: #${colors.primary};
`

const RentingLocationInfos = styled.div`
    display: flex;
    flex-direction: column;
`

const RentingLocationTitle = styled.h2`
    height: 51px;
    font-size: 36px;
    line-height: 51px;
`

const RentingLocationSubtitle = styled.h3`
    height: 26px;
    font-size: 18px;
    line-height: 26px;
`

const RentingLocationTags = styled.div`
    display: flex;
    margin-top: 20px;
`

const RentingLocationOwner = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
`

const RentingLocationOwnerInfos = styled.div`
    display: flex;
    align-items: center;
    height: 64px;
`

const RentingLocationOwnerName = styled.div`
    height: 52px;
    font-size: 18px;
    line-height: 52px;
    margin-right: 10px;
`

const RentingLocationOwnerPictureContainer = styled.div`
    width: 64px;
    height: 64px;
`

const RentingLocationOwnerPicture = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: contain;
`

const RentingLocationOwnerRating = styled.div`
    display: flex;
    width: 190px;
    margin-top: 15px;
`

const RentingLocationOwnerRatingImgContainer = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`

const RentingLocationOwnerRatingImg = styled.img`
    width: 30px;
    height: 30px;
    object-fit: contain;
`

const DropDownContainer = styled.div`
    width: 1240px;
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
`

function Housing() {
    const { id: rentingId } = useParams();
    const rentingsList = require('../../assets/logements.json');
    const stars = [];
    
    for(let value of rentingsList) {
        if(value.id === rentingId) {
            for(let i=0; i<(value.rating); i++ ) {
                stars[i] = filledStar;
            }
            for(let i=0; i<5; i++ ) {
                if(stars[i] !== filledStar) {
                    stars[i] = emptiedStar;
                }
            }
            return (
                <RentingWrapper>
                    <RentingContainer>
                        <Slideshow 
                            pictures={value.pictures}
                        />
                        <RentingCommonInfos>
                            <RentingLocationInfos>
                                <RentingLocationTitle>
                                    {value.title}
                                </RentingLocationTitle>
                                <RentingLocationSubtitle>
                                    {value.location}
                                </RentingLocationSubtitle>
                                <RentingLocationTags>
                                    {
                                        (value.tags).map((tag, index) => (
                                            <Tag 
                                                key={index}
                                                title={tag}
                                            />
                                        ))
                                    }
                                </RentingLocationTags>
                            </RentingLocationInfos>
                            <RentingLocationOwner>
                                <RentingLocationOwnerInfos>
                                    <RentingLocationOwnerName>
                                        {value.host.name}
                                    </RentingLocationOwnerName>
                                    <RentingLocationOwnerPictureContainer>
                                        <RentingLocationOwnerPicture src={value.host.picture} />
                                    </RentingLocationOwnerPictureContainer>
                                </RentingLocationOwnerInfos>
                                <RentingLocationOwnerRating>
                                    {
                                        (stars).map((star, index) => (
                                            <RentingLocationOwnerRatingImgContainer key={index}>
                                                <RentingLocationOwnerRatingImg key={index} src={star}/>
                                            </RentingLocationOwnerRatingImgContainer>
                                        ))  
                                    } 
                                    </RentingLocationOwnerRating>
                            </RentingLocationOwner>
                        </RentingCommonInfos>
                        <DropDownContainer>
                            <DropDown
                                title = 'Description'
                                description={value.description}
                                renting={true}
                            />
                            <DropDown
                                title = 'Équipements'
                                description={value.equipments}
                                renting={true}
                            />
                        </DropDownContainer>
                        
                    </RentingContainer>
                </RentingWrapper>
            )
        }
    }
    return(
        <Navigate to="404" />
    )
    
    
}

export default Housing