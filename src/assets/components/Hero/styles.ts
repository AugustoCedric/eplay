import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  height: 480px;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  padding-top: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    background-size: cover;
  }

  /* pseudo elemento para colocar uma mascara negra ao banner */
  &::after {
    position: absolute; /*como adicionamos este pseudo seletor como absoluto precisamos passar a cima no banner um relative para não fugir da dimenssão */
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /* como é um pseudo seletor ele precisa de um conteudo. Ai basta colocar conforme abaixo */
    content: '';
    /* agora vamos passar o Opacit conforme o projeto descrito no figma  */
    opacity: 0.56;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
  /* agora vamos adicionar uma regra no container para que fique visivel as Tags sobre o banner */
  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`
export const Infos = styled.div`
  padding: 16px;
  background-color: ${colors.black};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
