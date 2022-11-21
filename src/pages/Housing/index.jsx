import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Slideshow from '../../components/Slideshow';

const RentingWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const RentingContainer = styled.div`
    width: 1240px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

function Housing() {
    const { id: rentingId } = useParams();
    const rentingsList = require('../../assets/logements.json');
    let rentingImgs;

    for(let value of rentingsList) {
        if(value.id === rentingId) {
            rentingImgs = value.pictures;
        }
    }
    
    return (
        <RentingWrapper>
            <Slideshow 
                pictures={rentingImgs}
            />
        </RentingWrapper>
    )
}

export default Housing