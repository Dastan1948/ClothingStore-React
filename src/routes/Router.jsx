import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import Product from '../components/Product'
import Cart from '../pages/Cart'
import Sneakers from '../pages/Sneakers'
import Clothes from '../pages/Clothes'
import Login from '../pages/Login'
import SaleProducts from '../pages/SaleProducts'

const Router = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='' element={<Home />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='cart' element={<Cart />} />
          <Route path='sneakers' element={<Sneakers />} />
          <Route path='clothes' element={<Clothes />} />
          <Route path='login' element={<Login />} />
          <Route path='sale' element={<SaleProducts />} />

          <Route path='*' element={<h1 className='py-32 text-center'>Page Not Found</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default Router