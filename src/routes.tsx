import { Route, Routes } from 'react-router-dom'

import Categories from './Pages/Categories'
import Checkout from './Pages/Checkout'
import Home from './Pages/Home'
import Product from './Pages/Product'

// Criando as Rotas
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/Checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
