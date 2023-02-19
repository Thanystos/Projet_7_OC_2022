import styled from "styled-components"
import { useState } from 'react'
import prev from '../../assets/images/next.png'
import next from '../../assets/images/prev.png'

const SlideContainer = styled.div`
    width: 100%;
    min-width: 335px;
    height: 415px;
    position: relative;

    @media screen and (max-width: 635px) {
        height: 255px;
        width: 335px;
    }
`

const SlideImg = styled.img`
    width: 100%;
    height: 415px;
    object-fit: cover;
    border-radius: 25px;

    @media screen and (max-width: 635px) {
        height: 255px;
    }
`

const SlidePrev = styled.img`
    width: 46.68px;
    height: 79.2px;
    position: absolute;
    top: 167.9px;
    left: 23.36px;
    display: ${({ pictures }) => (pictures.length < 2 ? 'none' : 'block')};
    cursor: pointer;

    @media screen and (max-width: 635px) {
        width: 11.67px;
        height: 19.8px;
        top: 117.6px
    }

    @media screen and (min-width: 635px) and (max-width: 900px) {
        width: 18.90px;
        height: 32.07px;
        top: 191.465px
    }
`

const SlideNext = styled.img`
    width: 46.68px;
    height: 79.2px;
    position: absolute;
    top: 167.9px;
    right: 23.36px;
    display: ${({ pictures }) => (pictures.length < 2 ? 'none' : 'block')};
    cursor: pointer;

    @media screen and (max-width: 635px) {
        width: 11.67px;
        height: 19.8px;
        top: 117.6px
    }

    @media screen and (min-width: 635px) and (max-width: 900px) {
        width: 18.90px;
        height: 32.07px;
        top: 191.465px
    }
`

const SlideNumber = styled.div`
    width: 24px;
    height: 32.4px;
    font-size: 18px;
    text-align: center;
    position: absolute;
    bottom: 24.92px;
    right: 48%;
    color: white;
    display: ${({ pictures }) => (pictures.length < 2 ? 'none' : 'block')};
`

function Slideshow({ pictures }) {
    const [index, setIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstPicture = index === 0;
        const newIndex = isFirstPicture ? pictures.length - 1 : index - 1;
        setIndex(newIndex);
    }

    const goToNext = () => {
        const isLastPicture = index === pictures.length - 1;
        const newIndex = isLastPicture ? 0 : index + 1;
        setIndex(newIndex);
    }

    return (
        <SlideContainer>
            <SlidePrev src={prev} pictures={pictures} onClick={() => goToPrevious()}/>
            {
                <SlideImg src={ pictures[index] } />
            }
            <SlideNext src={next} pictures={pictures} onClick={ () => goToNext() }/>
            <SlideNumber pictures={pictures}>
                {index + 1}/{pictures.length}
            </SlideNumber>

        </SlideContainer>
    )
}

export default Slideshow