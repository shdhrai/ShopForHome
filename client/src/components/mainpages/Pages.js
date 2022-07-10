import React, {useContext} from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import OrderHistory from './history/OrderHistory'
import OrderDetails from './history/OrderDetails'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'

import {GlobalState} from '../../GlobalState'


function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Router>
            <Route path="/detail/:id" exact component={DetailProduct} />

         

            
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />

          
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} />

     


            {/* <Route path="*" exact component={NotFound} /> */}
        </Router>
    )
}

export default Pages
