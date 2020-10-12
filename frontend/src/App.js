import React,{Component} from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import {BrowserRouter,Route,Link} from "react-router-dom";
import CartScreen from './screens/CartScreen.js'; 
import SignInScreen from './screens/SignInScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
// import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import { useSelector, useDispatch } from 'react-redux';
function App() {
    
    
    const openMenu =() => {
        document.querySelector('.sidebar').classList.add('open');
    }

    const closeMenu = () => {
        document.querySelector('.sidebar').classList.remove('open');
    }
    
    // render() {
      const userSignin = useSelector((state) => state.userSignin);
      const { userInfo } = userSignin;

      return (
        <div>

        <BrowserRouter>
            <div className='grid-container'>
              <header className='header'>
                <div className='brand'>
                  <button onClick={openMenu}>&#9776;</button>
                  <Link to='/' className='header'>Amazona</Link>
                </div>
                <div className='header-links'>
                  <a href='cart.html'>Cart</a>
                  {userInfo ? (
                    <Link to="/profile">{userInfo.name}</Link>
                  ) : (
                    <Link to="/signin">Sign In</Link>
                  )}

                  {userInfo && userInfo.isAdmin && (
                    <div className="dropdown">
                      <a href="#">Admin</a>
                      <ul className="dropdown-content">
                        <li>
                          <Link to="/orders">Orders</Link>
                          <Link to="/products">Products</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </header>
              <aside className='sidebar'>
                <div>
                  <ul className="categories">
                    <li>
                      <Link to="/category/Pants">Pants</Link>
                    </li>

                    <li>
                      <Link to="/category/Shirts">Shirts</Link>
                    </li>
                  </ul>
                  <div className='closeSidebar' onClick={closeMenu}>x</div>

                </div>
              </aside>
              <main className='main'>
                <div className='content'>

                  <Route path="/orders" component={OrdersScreen} />
                  <Route path="/profile" component={ProfileScreen} />
                  <Route path="/order/:id" component={OrderScreen} />
                  <Route path="/products" component={ProductsScreen} />
                  <Route path="/shipping" component={ShippingScreen} />
                  {/* <Route path="/payment" component={PaymentScreen} /> */}
                  <Route path="/placeorder" component={PlaceOrderScreen} />
                  <Route path="/signin" component={SignInScreen} />
                  <Route path="/register" component={RegisterScreen} />
                  <Route path="/product/:id" component={ProductScreen} />
                  <Route path="/cart/:id?" component={CartScreen} />
                  <Route path="/category/:id" component={HomeScreen} />
                  <Route path="/" exact={true} component={HomeScreen} /> 

                </div>
              </main>

              <footer className='footer'>
                All rights reserved.
              </footer>
            </div>
        </BrowserRouter>
        </div>

      );
    // }
}

export default App;