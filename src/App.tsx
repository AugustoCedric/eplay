import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Header from './assets/components/Header'
import { GlobalCss } from './styles'

// importando as rotas de navegação do site
import Footer from './assets/components/Footer'
import Rotas from './routes'
import { store } from './store'
import Cart from './assets/components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
