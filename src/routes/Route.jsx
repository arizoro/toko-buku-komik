import { createBrowserRouter } from 'react-router-dom'
import Book from '../pages/Book'
import Home from '../pages/Home'
import NotFound from '../pages/Notfound'
import Navbar from '../layouts/Navbar'
import ShoppingCart from '../pages/ShopingCart'
import DetailBuku from '../pages/DetailBook'


    export const router = createBrowserRouter([
        {
            path: '/',
            element: <Navbar/>,
            // errorElement: <NotFound/>,
            children : [
                {
                    path : '/',
                    element : <Home/>
                },
                {
                    path : '/book',
                    element: <Book/>
                },
                {
                    path: '/cart',
                    element:<ShoppingCart/>
                },
                {
                    path : '/book/:id',
                    element : <DetailBuku/>
                },
                {
                    path : '*',
                    element: <NotFound/>
                }
            ]
        },
        
    ])

