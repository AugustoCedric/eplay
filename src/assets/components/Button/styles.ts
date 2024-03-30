import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../../styles'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? cores.verde : cores.czClaro)};
  color: ${(props) =>
    props.variant === 'primary' ? cores.verde : cores.czClaro};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`
export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.czClaro};
  color: ${cores.czClaro};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
