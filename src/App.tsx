import { BrowserRouter } from 'react-router-dom'

import Header from './assets/components/Header'
import { GlobalCss } from './styles'

// importando as rotas de navegação do site
import Footer from './assets/components/Footer'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
