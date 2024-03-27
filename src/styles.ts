import styled, { createGlobalStyle } from 'styled-components'
// criando paletas de cores
export const cores = {
  branco: '#fff',
  czClaro: '#EEE',
  preto: '#111',
  czEscuro: '#333',
  verde: '#10AC84'
}

// Iniciando a estilização global do projeto
export const GlobalCss = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Roboto, sans-serif;
  }

  body{
    background-color:${cores.preto};
    color:${cores.branco};
    padding-top:40px;
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
