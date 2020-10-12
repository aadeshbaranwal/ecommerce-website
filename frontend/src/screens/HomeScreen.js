import React , {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {listProducts} from '../actions/productActions.js';
import {useSelector,useDispatch} from 'react-redux';

const HomeScreen = (props) => {
  const productList= useSelector(state => state.ProductList);
  const { products, loading, error } = productList;
  const dispatch=useDispatch();
  useEffect( () => {
      dispatch(listProducts());
      return() => {
        //
      }
  }, [])


	return (
    loading ? <div>Loading...</div>    :
    error ? <div>{error}</div>   :
		
    <div>
			<ul className='products'>
                {
                    products.map( product => 
                        <li>
                          <div className='product-item'>
                          	<Link to={'/product/'+product.id}>
	                            <img className='product-image' src='/images/d1.png' />
	                        </Link>
                            <div className='product-name'>
                              <Link to={'/product/'+product.id} >{product.name}</Link>
                            </div>
                            <div className='product-brand'>{product.brand}</div>
                            <div className='product-price'>Rs. {product.price}</div>
                            <div className='product-rating'>Rating: {product.rating} stars({product.numReviews})</div>
                          </div>
                        </li>
                    )
                }
            </ul>
		</div>
	)
}

export default HomeScreen;