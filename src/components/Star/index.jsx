import styled from "styled-components"
import emptiedStar from '../../assets/images/emptiedStar.png'
import filledStar from '../../assets/images/filledStar.png'

const StarImg = styled.img`
    width: 30px;
    height: 30px;
    object-fit: contain;

    @media screen and (max-width: 900px) {
        width: 15px;
        height: 15px;
    }

    @media screen and (min-width: 635px) and (max-width: 900px){
        width: 22.5px;
        height: 22.5px;
        margin-right: 5px;
    }
`

function Star({ index, rating }) {
    let ratingNb = parseInt(rating);

    return (
        index<ratingNb ? <StarImg src={filledStar} /> : <StarImg src={emptiedStar} />
    )
}

export default Star