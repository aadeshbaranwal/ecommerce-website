import Axios from 'axios';
import {CART_ADD_ITEM,CART_SAVE_PAYMENT,CART_REMOVE_ITEM,CART_SAVE_SHIPPING} from '../constants/cartConstants.js';
import Cookie from  'js-cookie';

const addToCart= (productId,qty) => async (dispatch,getState) =>{
	try{
		const {data}= await Axios.get('/api/product/'+productId);
		dispatch({type:CART_ADD_ITEM, payload:{
			product: data.id,
			name:data.name,
			image:data.image,
			price:data.price,
			countInStock:data.countInStock,
			qty:qty > 1 ? qty:1
		}}) 

    	const { cart: { cartItems } } = getState();
    	Cookie.set("cartItems", JSON.stringify(cartItems));
	}

	catch(err){

	}
}

const removeFromCart = (productId) => (dispatch,getState) => {
	dispatch({type:CART_REMOVE_ITEM, payload:productId });
	
    const { cart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
}

const saveShipping= (data) => (dispatch) => {
	dispatch({type:CART_SAVE_SHIPPING, payload:data});
}

const savePayment= (data) => (dispatch) => {
	dispatch({type:CART_SAVE_PAYMENT, payload:data});
}

export {addToCart,removeFromCart,savePayment,saveShipping};