import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './Pages/Home'
import Header from './assets/components/Header'
import { GlobalCss } from './styles'

// Criando as Rotas
const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
