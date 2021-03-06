import React, { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import Menu from "./icon/menu.svg";
import Close from "./icon/close.svg";
import Carticon from "./icon/cart.svg";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import Headertop from "./Headertop";
import Login from '../mainpages/auth/Login'
import Register from '../mainpages/auth/Register'
import OrderHistory from '../mainpages/history/OrderHistory'
import Products from '../mainpages/products/Products'
import Cart from '../mainpages/cart/Cart'
import Categories from '../mainpages/categories/Categories'
import NotFound from '../mainpages/utils/not_found/NotFound'
import CreateProduct from '../mainpages/createProduct/CreateProduct'
import DetailProduct from '../mainpages/detailProduct/DetailProduct'
import { Mailer } from "../mailer/Mailer";
import Home from "../mainpages/products/Home";

function Header() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;
  const [menu, setMenu] = useState(false);

  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
  };

  const adminRouter = () => {
    return (
      <>
       <li>
          <Link to="/mailer">Mail Stocks</Link>
        </li>
        <li>
          <Link to="/create_product">Create Product</Link>
        </li>
        <li>
          <Link to="/category">Categories</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li> 
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <>
        <li>
          <Link to="/" onClick={logoutUser}>
            Logout
          </Link>
        </li>
      </>
    );
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <>
      <Headertop />
      <header>
        <div className="menu" onClick={() => setMenu(!menu)}>
          <img src={Menu} alt="" width="30" />
        </div>
        <img className="icon" src={process.env.PUBLIC_URL + "/images/logo.png"} alt="" srcset="" />
        <div className="logo">
          <h3>
            <Link to="/">{isAdmin ? "Admin" : "ShopForHome"}</Link>
          </h3>
        </div>

        <ul style={styleMenu}>
          <li>
            <Link to="/products">{isAdmin ? "Products" : "Shop"}</Link>
          </li>

          {isAdmin && adminRouter()}

          {isLogged ? (
            loggedRouter()
          ) : (
            <li>
              <Link to="/login">Login ??? Register</Link>
            </li>
          )}

          <li onClick={() => setMenu(!menu)}>
            <img src={Close} alt="" width="30" className="menu" />
          </li>
        </ul>

        {isAdmin ? (
          ""
        ) : (
          <>
          <div className="cart-icon">
            <span>{cart.length}</span>
            <Link to="/cart">
              <img src={Carticon} alt="" width="30" />
            </Link>
          </div>
          <span class="badge rounded-pill bg-dark">
            Wish
          </span>
        </>
        )}
      </header>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/login" exact component={isLogged ? NotFound : Login} />
          <Route
            path="/register"
            exact
            component={isLogged ? NotFound : Register}
          />
          <Route
            path="/category"
            exact
            component={isAdmin ? Categories : NotFound}
          />
          <Route
            path="/create_product"
            exact
            component={isAdmin ? CreateProduct : NotFound}
          />
          <Route
            path="/history"
            exact
            component={isLogged ? OrderHistory : NotFound}
          />
          <Route path="/cart" exact component={Cart} />
          <Route path="/detail/:id" exact component={DetailProduct} />  
          <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />
          <Route path="/mailer" exact component={isAdmin ? Mailer : NotFound} />
          
    </>
  );
}

export default Header;
