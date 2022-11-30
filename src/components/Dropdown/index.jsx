import { useState } from "react"
import styled from "styled-components"
import colors from "../../utils/style/colors"
import arrowDown from "../../assets/images/arrowDown.png"
import arrowUp from "../../assets/images/arrowUp.png"

const DropDownContainer = styled.div`
    max-width: ${({ renting }) => (renting ? '582px' : '1023px')};
    width: 100%;
    border-radius: ${({ renting }) => (renting ? '10px' : '5px')};
    font-size: ${({ renting }) => (renting ? '18px' : '24px')};
    margin-bottom: ${({ renting }) => (renting ? '0px' : '31px')};
    
    @media screen and (max-width: 375px) {
        margin-bottom: ${({ renting }) => (renting ? '20.07px' : '19px')};
        font-size: 12px;
    }
`

const DropDownHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #${colors.primary};
    border-radius: ${({ renting }) => (renting ? '10px' : '5px')};
    height: ${({ renting }) => (renting ? '52px' : '47px')};
    line-height: ${({ renting }) => (renting ? '52px' : '47px')};

    @media screen and (max-width: 375px) {
        height: 30px;
        line-height: 30px;
    }
`

const DropDownTitle = styled.h3`
    color: white;
    padding-left: 20px;
`

const DropDownArrowContainer = styled.div`
    display: flex;
    align-items: center;
    width: 15.56px;
    height: 26.4px;
    padding-right: 20px;
`

const DropDownArrow = styled.img`
    width: 15.56px;
    height: 26.4px;
    object-fit: contain;
`

const DropDownDescription = styled.div`
    border-radius: ${({ renting }) => (renting ? '10px' : '5px')};
    position: relative;
        top: -10px;
    background-color: #${colors.secondary};
    color: #${colors.primary};
    padding: 40px 12px 53px 20px;
    z-index: -1;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

    @media screen and (max-width: 375px) {
        padding: 23.02px 6.91px 1.3px 11.51px;
    }
`

const DropDownEquipments = styled.ul`
    list-style: none;
`

const DropDownEquipment = styled.li`
    
`

function DropDown({ title, description, renting }) {
    let equipments = [];
    const [isOpen, setIsOpen] = useState(false);

    if(typeof(description) == 'object') {
        equipments = [...description];
    }

    return (
        <DropDownContainer renting={renting} onClick={() => setIsOpen(!isOpen)}>
            <DropDownHeader renting={renting}>
                <DropDownTitle>
                    {title}
                </DropDownTitle>
                <DropDownArrowContainer>
                    <DropDownArrow src={isOpen ? arrowUp : arrowDown}/>
                </DropDownArrowContainer>
            </DropDownHeader>
            <DropDownDescription renting={renting} isOpen={isOpen}>
                {
                    equipments.length !== 0 ? 
                        <DropDownEquipments>
                            {(equipments).map((equipment, index) => (
                                <DropDownEquipment key={index}>
                                    {equipment}
                                </DropDownEquipment>
                            ))}
                        </DropDownEquipments>
                        : description   
                }
            </DropDownDescription>
            
        </DropDownContainer>
    )
}

export default DropDown