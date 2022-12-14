import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors'


export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #${colors.primary};
    &:hover {
        text-decoration: underline;
    }
`