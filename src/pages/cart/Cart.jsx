import React from 'react'
import Empty from '../../components/empty/Empty'
import { useSelector , useDispatch } from 'react-redux'
import { incrementCartQuantity , decrementCartQuantity , removeItemFromCart } from '../../context/cartSlice'
import './Cart.css'
import { FiTrash } from "react-icons/fi";

const Cart = () => {

const cart = useSelector(item => item.cart.value)
const dispatch = useDispatch()

const shopCarts = cart?.map(el => <div key={el.id} className="shopCart">
  <div className="el__products">
    <img src={el.images[0]} width={100} alt="" />
    <span>
      <h4 title={el.title}>{el.title}</h4>
      <p>SKU: 1995751877966</p>
    </span>
  </div>
  <p className='parag'>${el.price}.00</p>
   <div className="quantity">
      <button disabled={el.quantity == 1} onClick={()=> dispatch(decrementCartQuantity(el))}>-</button>
      <p>{el.quantity}</p>
      <button onClick={()=> dispatch(incrementCartQuantity(el))}>+</button>
   </div>
   <p className='paragraph'>{el.price * el.quantity }$</p>
   <button  onClick={()=> dispatch(removeItemFromCart(el))} className='trash'>
   <FiTrash />
   </button>
</div>)


let totalPrice = cart?.reduce((sum , item) => sum + (item.price * item.quantity) , 0)

  return (
    <div>
      <div className="container">
       {
        cart.length ? 
        <div className='df'>
          <div>
          {shopCarts}
          </div>
          <div className='dfc'>
             <h2>Cart Totals</h2>
             <p>Coupon Apply</p>
             <div className="inp">
             <input type="text" name="" id="" />
             <button>APPLY</button>
             </div>
             <div className="pdf">
              <h4>Subtotal</h4>
              <h3>${totalPrice?.brm()}</h3>
             </div>
             <div className="pdf">
              <h4>Coupon Discount</h4>
              <h5>(-)00.00</h5>
             </div>
             <div className="pdf">
              <h4>Shiping</h4>
              <h3>$16.00</h3>
             </div>
             <div className="pdf">
              <h3>Total</h3>
              <h2>${(totalPrice + 16)?.brm() }.00</h2>
             </div>
              <div className="btna">
                <a href="/login">
                <button>Proceed To Checkout</button>
                </a>
                <a href="/">Continue Shopping</a>
              </div>
          </div>
      </div>
        
            :
      <Empty text="Cart"/>
       }
      </div>
      
    </div>
  )
}

export default Cart