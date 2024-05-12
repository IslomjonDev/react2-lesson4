import React from 'react'
import "./Products.css"
import { useDispatch } from 'react-redux';
import { toggleLike } from '../../context/wishlistSlice';
import { addToCart } from '../../context/cartSlice';
import { CiSearch , CiHeart  , CiShoppingCart} from "react-icons/ci";

const Products = ({data}) => {
  const dispatch = useDispatch()
  
  const product = data?.map( el =>  <div key={el.id} className="card">
  <img src={el.images[0]} alt="" />
    <div className="btns">
    <button onClick={()=> dispatch(toggleLike(el))}>
  <CiHeart/>
  </button>
  <button onClick={() => dispatch(addToCart(el))}>
  < CiShoppingCart />
  </button>
  <button >
  <CiSearch />
  </button>
    </div>
    <h2>{el.title}</h2>
  <h3>${el.price}.00</h3>
</div>
)
  return (
    <div>
        <div className="container">
        <h2>Products</h2>
        <div className="wrapper">
          {product}
        </div>
        </div>
    </div>
  )
}

export default Products