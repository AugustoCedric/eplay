import { Route, Routes } from 'react-router-dom'

import Categories from './Pages/Categories'
import Home from './Pages/Home'
import Product from './Pages/Product'

// Criando as Rotas
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default Rotas
