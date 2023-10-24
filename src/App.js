import React from 'react'
import NavBar from './Components/NavBar'
import Homepage from './Pages/Homepage'
import ContactPage from './Pages/ContactPage'
import ProductPage from './Pages/ProductPage'
import SearchResult from './Pages/SearchResult'
import Cart from './Pages/Cart'
import Footer from './Components/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <br/><br/>
      <Routes>
        <Route element={<Homepage/>} path='/'/>
        <Route element={<ProductPage/>} path='/PP'/>
        <Route element={<SearchResult/>} path='/SR'/>
        <Route element={<ContactPage/>} path='/CP'/>
        <Route element={<Cart/>} path='/UP'/>
       
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App