import { Route, Routes } from 'react-router-dom'

import Categories from './Pages/Categories'
import Home from './Pages/Home'

// Criando as Rotas
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default Rotas
