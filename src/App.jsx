import { useState } from 'react'
// import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'

import Home from './pages/Home'
import Book from './pages/Book'
import { router } from './routes/Route'
import { RouterProvider } from 'react-router-dom'
import { ShopingCartProvider } from './context'


function App() {

  return (
    <>
    <ShopingCartProvider>
    <RouterProvider router={router} >
      <Home/>
      <Book/>
    </RouterProvider>
    </ShopingCartProvider>
    </>
  )
}

export default App
