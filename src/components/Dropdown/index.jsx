import styled from "styled-components"
import colors from "../../utils/style/colors"

const DropDownContainer = styled.div`
    width: ${({ renting }) => (renting ? '582px' : '1023px')};
    border-radius: ${({ renting }) => (renting ? '10px' : '5px')};
    font-size: ${({ renting }) => (renting ? '18px' : '24px')};
    margin-top: ${({ renting }) => (renting ? '0px' : '33px')};
    
`

const DropDownTitle = styled.h3`
    height: ${({ renting }) => (renting ? '52px' : '47px')};
    line-height: ${({ renting }) => (renting ? '52px' : '47px')};
    border-radius: ${({ renting }) => (renting ? '10px' : '5px')};
    background-color: #${colors.primary};
    color: white;
    padding-left: 20px;
`

const DropDownDescription = styled.div`
    border-radius: ${({ renting }) => (renting ? '10px' : '5px')};
    position: relative;
        top: -10px;
    background-color: #${colors.secondary};
    color: #${colors.primary};
    padding: 40px 12px 53px 20px;
    z-index: -1;;
`

const DropDownEquipments = styled.ul`
    list-style: none;
`

const DropDownEquipment = styled.li`
    
`

function DropDown({ title, description, renting }) {
    let equipments = [];
    if(typeof(description) == 'object') {
        equipments = [...description];
    }

    return (
        <DropDownContainer renting={renting}>
            <DropDownTitle renting={renting}>
                {title}
            </DropDownTitle>
            <DropDownDescription renting={renting}>
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