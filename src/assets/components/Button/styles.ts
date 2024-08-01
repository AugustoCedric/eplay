import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Props } from '.'
import { colors } from '../../../styles'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${(props) =>
      props.variant === 'primary' ? colors.green : colors.lightGray};
  color: ${colors.lightGray};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  border: 2px solid ${colors.lightGray};
  color: ${colors.lightGray};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
`
