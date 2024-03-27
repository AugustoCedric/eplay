import { BrowserRouter } from 'react-router-dom'

import Header from './assets/components/Header'
import { GlobalCss } from './styles'

// importando as rotas de navegação do site
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
