import { createGlobalStyle } from 'styled-components'
// criando paletas de cores
export const cores = {
  branco: '#fff',
  czClaro: '#EEE',
  preto: '#111',
  czEscuro: '#333',
  verde: '#10AC84',
  czPrata: '#A3A3A3'
}
export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

// Iniciando a estilização global do projeto
export const GlobalCss = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Roboto, sans-serif;
    list-style:none;
  }

  body{
    background-color:${cores.preto};
    color:${cores.branco};
    padding-top:40px;
  }
  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}){
      max-width: 80%;
    }
  }

  `
