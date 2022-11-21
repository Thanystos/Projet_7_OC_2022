import styled from "styled-components"
import { useState } from 'react'
import prev from '../../assets/images/next.png'
import next from '../../assets/images/prev.png'

const SlideContainer = styled.div`
    width: 1240px;
    height: 415px;
    position: relative;
`

const SlideImg = styled.img`
    width: 1240px;
    height: 415px;
    object-fit: cover;
    border-radius: 25px;
`

const SlidePrev = styled.img`
    width: 46.68px;
    height: 79.2px;
    position: absolute;
    top: 167.9px;
    left: 23.36px;
`

const SlideNext = styled.img`
    width: 46.68px;
    height: 79.2px;
    position: absolute;
    top: 167.9px;
    right: 23.36px;
`

const SlideNumber = styled.div`
    width: 24px;
    height: 32.4px;
    font-size: 18px;
    text-align: center;
    position: absolute;
    bottom: 24.92px;
    right: 607px;
    color: white;
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
            <SlidePrev src={prev} onClick={ () => goToPrevious() }/>
            {
                <SlideImg src={ pictures[index] } />
            }
            <SlideNext src={next} onClick={ () => goToNext() }/>
            <SlideNumber>
                {index + 1}/{pictures.length}
            </SlideNumber>

        </SlideContainer>
    )
}

export default Slideshow