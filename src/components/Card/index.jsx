import styled from "styled-components"

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 340px;
    height: 340px;
    border-radius: 10px;
    margin-bottom: 50px;
    background-size: cover;
    background-image: 
      linear-gradient(
        rgba(255, 255, 255, 0), 
        rgba(0, 0, 0, 0.5)
      ),
      url(${({ imgUrl }) => (imgUrl)}); // seul moyen de transmettre une prop à mon css
`

const CardImage = styled.img`
    object-fit: cover;
    border-radius: 10px;
    width: 340px;
    height: 340px;
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