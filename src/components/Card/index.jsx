import styled from "styled-components"

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 340px;
    border-radius: 10px;
    background-size: cover;
    background-image: 
        linear-gradient(
            rgba(255, 255, 255, 0), 
            rgba(0, 0, 0, 0.5)
        ),
        url(${({ imgUrl }) => (imgUrl)});

        @media screen and (max-width: 635px) {
            width: 335px;
            height: 255px;
            margin-bottom: 20px;
        }
`

const CardTitle = styled.h2`
    width: 300px;
    height: 52px;
    color: white;
    position: absolute;
    margin: 0px;
    padding: 0px 20px 20px 20px;
    font-size: 18px;
    
`

function Card({ title, cover }) {
    return (
        <CardWrapper imgUrl={cover}>
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
    )
}

export default Card