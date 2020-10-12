import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import {ProductListReducer , productDetailsReducer,productSaveReducer,productDeleteReducer,productReviewSaveReducer,} from './reducers/ProductListReducer.js';
import thunk from 'redux-thunk';
import {cartReducer} from './reducers/cartReducer.js';
import {userSigninReducer,userRegisterReducer,userUpdateReducer} from './reducers/UserReducer.js';
import {orderCreateReducer,	orderDetailsReducer,orderPayReducer, myOrderListReducer, orderListReducer,orderDeleteReducer} from './reducers/orderReducer';
import Cookie from 'js-cookie';

const cartItems =Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON('userInfo') ||  null;
const initialState = {
	cart:{cartItems},
	userSignIn:{userInfo} 
};

const reducer = combineReducers( {
	ProductList: ProductListReducer,
	productDetails:productDetailsReducer,
	cart:cartReducer,
	userSignin:userSigninReducer,
	userRegister:userRegisterReducer,
	productSave: productSaveReducer,
	productDelete: productDeleteReducer,
	productReviewSave: productReviewSaveReducer,
	orderCreate: orderCreateReducer,
	orderDetails: orderDetailsReducer,
	orderPay: orderPayReducer,
	userUpdate: userUpdateReducer,
	myOrderList: myOrderListReducer,
	orderList: orderListReducer,
	orderDelete: orderDeleteReducer
});

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer , initialState, composeEnhancer(applyMiddleware(thunk))); 

export default store;