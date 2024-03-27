import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../../styles'

export const ButtonContainer = styled.button`
  border: 2px solid ${cores.czClaro};
  color: ${cores.czClaro};
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