import styled from "styled-components"
import colors from "../../utils/style/colors"

const TagContainer = styled.div`
    width: 115px;
    height: 25px;
    border-radius: 10px;
    margin-right: 10px;
    background-color: #${colors.primary};
    color: white;
    text-align: center;
    line-height: 25px;
`

const TagTitle = styled.h3`
    font-size: 14px;
`

function Tag({ title }) {
    return (
        <TagContainer>
            <TagTitle>
                {title}
            </TagTitle>
        </TagContainer>
    )
}

export default Tag