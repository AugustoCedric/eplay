import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Banner from './assets/components/Banner'
import Header from './assets/components/Header'
import { GlobalCss } from './styles'

// Criando as Rotas
const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
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
