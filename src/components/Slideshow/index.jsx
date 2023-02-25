import styled, { css, keyframes } from "styled-components"
import { useState } from 'react'
import prev from '../../assets/images/next.png'
import next from '../../assets/images/prev.png'

const SlideContainer = styled.div`
    width: 100%;
    min-width: 335px;
    height: 415px;
    position: relative;
    overflow: hidden; // Commenter cette ligne pour bien voir comment tout fonctionne

    @media screen and (max-width: 635px) {
        height: 255px;
        width: 335px;
    }
`

const slideToRight = keyframes`
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(100%);
    }
`

const slideToLeft = keyframes`
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-100%);
    }
`

const animstyle = css`
    animation: ${slideToRight} 1s ease-in-out forwards;
`

const animStyleR = css`
    animation: ${slideToLeft} 1s ease-in-out forwards;
`

const SlidePrevImg = styled.img`
    width: 100%;
    height: 415px;
    object-fit: cover;
    border-radius: 25px;
    position: absolute;
        left: -100%;
    &.toRight {
        ${animstyle}
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
    z-index: 1;

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

const SlideImg = styled.img`
    width: 100%;
    height: 415px;
    object-fit: cover;
    border-radius: 25px;
    &.toRight {
        ${animstyle}
    }
    &.toLeft {
        ${animStyleR}
    }

    @media screen and (max-width: 635px) {
        height: 255px;
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
    z-index: 1;

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

const SlideNextImg = styled.img`
    width: 100%;
    height: 415px;
    object-fit: cover;
    border-radius: 25px;
    position: absolute;
        right: -100%;
    &.toLeft {
        ${animStyleR}
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
    z-index: 1;
`

function Slideshow({ pictures }) {
    const [index, setIndex] = useState(0); // Représente la position de l'image affichée
    const [isAnimationFinished, setIsAnimationFinished] = useState(true); // Indique l'état de l'animation (arrêt ou en cours)
    const [askPrevOrNext, setAskPrevOrNext] = useState([false, false]); // Indique si on a demandé l'image précédente ou suivante
    
    // Ce qu'on effectue au démarrage de l'animation
    function handleAnimationStart() {
        setIsAnimationFinished(false);
    }

    // Ce qu'on effectue une fois l'animation terminée
    function handleAnimationEnd() {
        let newIndex; // Représente l'index de la nouvelle image à afficher

        setIsAnimationFinished(true)

        // Dans l'un ou l'autre cas, je cherche à trouver l'index de la nouvelle image à afficher
        if(askPrevOrNext[0]) {
            const isFirstPicture = index === 0;
            newIndex = isFirstPicture ? pictures.length - 1 : index - 1;
        }
        else {
            const isLastPicture = index === pictures.length - 1;
            newIndex = isLastPicture ? 0 : index + 1;
        }
        setIndex(newIndex);
    }

    // Méthode lancée sur l'event lié au clic du bouton précédent
    const goToPrevious = () => {
        setAskPrevOrNext([true, false]); // Prev cliqué / Next non cliqué
        handleAnimationStart();
    }

    // Méthode lancée sur l'event lié au clic du bouton suivant
    const goToNext = () => {
        setAskPrevOrNext([false, true]); // Prev non cliqué / Next cliqué
        handleAnimationStart();
    }

    return (
        <SlideContainer>
            <SlidePrevImg onAnimationEnd={handleAnimationEnd} className={(isAnimationFinished || askPrevOrNext[1]) ? '' : 'toRight'} src={ (index-1) < 0 ? pictures[pictures.length-1] : pictures[index-1] } />
            <SlidePrev src={prev} pictures={pictures} onClick={() => goToPrevious()}/>
            {
                <SlideImg onAnimationEnd={handleAnimationEnd} className={isAnimationFinished ? '' : (askPrevOrNext[1] ? 'toLeft': 'toRight')} src={ pictures[index] } />
            }
            <SlideNext src={next} pictures={pictures} onClick={ () => goToNext() }/>
            <SlideNumber pictures={pictures}>
                {index + 1}/{pictures.length}
            </SlideNumber>
            <SlideNextImg onAnimationEnd={handleAnimationEnd} className={(isAnimationFinished || askPrevOrNext[0]) ? '' : 'toLeft'} src={ (index+1) > (pictures.length-1) ? pictures[0] : pictures[index+1] } />
        </SlideContainer>
    )
}

export default Slideshow