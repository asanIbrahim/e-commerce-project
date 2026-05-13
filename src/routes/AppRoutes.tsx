import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Checkout from '../pages/Checkout'
import Cart from '../pages/Cart'
import Products from '../pages/Products'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />} >
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} /> 
      <Route path='/cart'  element={<Cart />} />    
      <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
