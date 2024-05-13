import React from 'react'
import './Login.css'
import { useSelector } from 'react-redux'
import card from '../../assets/image17.png'
import { useState } from 'react'
const Login = () => {



  const [name , setName] = useState("")
  const [country , setCountry] = useState("")
  const [state , setState] = useState("")
  const [street , setStreet] = useState("")
  const [email , setEmail] = useState("")
  const [lastname , setLastName] = useState("")
  const [phone , setPhone] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    let newUser = {
      name , 
      country , 
      state , 
      street , 
      email , 
      lastname , 
      phone
    }
    console.log(newUser);
  }

  const cart = useSelector(item => item.cart.value)
  const shopCarts = cart?.map(el => <div key={el.id} className="loginCart">
  <div className="login__products">
    <img src={el.images[0]} width={100} alt="" />
    <div> 
      <h4 title={el.title}>{el.title}</h4>
      <p>SKU: 1995751877966</p>
    </div>
  </div>
      <p className='par' >(x{el.quantity})</p>
   <h3 className='h3'>{el.price * el.quantity }$</h3>
</div>)
let totalPrice = cart?.reduce((sum , item) => sum + (item.price * item.quantity) , 0)

  
  return (
    <>
        
    <div className="container">
        <div className="login">        
              <div>
                <h3>Billing Address</h3>
                <form onSubmit={handleSubmit} action="">
                <div>
                  <span>
                    <label htmlFor="">First name *</label>
                    <input value={name} onChange={(e) => setName(e.target.value) } type="text" />
                  </span>
                  <span>
                    <label htmlFor="">Country / Region *</label>
                    <input value={country} onChange={(e) => setCountry(e.target.value) } type="text" placeholder='Select a country / region' />
                  </span>
                  <span>
                    <label htmlFor="">State *</label>
                    <input value={state} onChange={(e) => setState(e.target.value) } type="text" placeholder='Select a state' />
                  </span>
                  <span>
                    <label htmlFor="">Street Adress *</label>
                    <input value={street} onChange={(e) => setStreet(e.target.value) } type="text" placeholder='House number and street name' />
                  </span>
                  <span>
                    <label htmlFor="">Email address *</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value) } type="email"  />
                  </span>
                    <div className="xzoka">
                      <input type="checkbox" />
                      <p>Ship to a different address?</p>
                    </div>
                    <span>
                    <label htmlFor="">Order notes (optional)</label>
                    <input className='inpu' type="text"  />
                  </span>
                </div>
                <div>
                  <span>
                    <label value={lastname} onChange={(e) => setLastName(e.target.value) } htmlFor="">Last name *</label>
                    <input type="text" />
                  </span>
                  <span>
                    <label htmlFor="">Town / City *</label>
                    <input type="text" placeholder='Select a country / region' />
                  </span>
                  <span>
                    <input className='spn' type="text" placeholder='Appartment, suite, unit, etc. (optional)' />
                  </span>
                  <span>
                    <label htmlFor="">Zip *</label>
                    <input type="text"  />
                  </span>
                  <span>
                    <label value={phone} onChange={(e) => setPhone(e.target.value) } htmlFor="">Phone Number *</label>
                    <div>
                      <select name="" id="">
                        <option value="">+998</option>
                        <option value="">+966</option>
                        <option value="">+1</option>
                        <option value="">+954</option>
                      </select>
                      <input className='number' type="number" />
                    </div>
                  </span>

                <button type='submit'>Place Order</button>
                </div>

            </form>
              </div>
            <div className='mt'>
              <h3>Your Order</h3>
               <div className="dfx">
                <p>Products</p>
                <p>Subtotal</p>
               </div>
              {shopCarts}
            
              <div className="total">
                  <div className="subtotal">
                    <p>Subtotal</p>
                    <h3>${totalPrice}</h3>
                  </div>
                  <div className="subtotal">
                    <p>Coupon Discount</p>
                    <p>(-) 00.00</p>
                  </div>
                  <div className="subtotal">
                    <p>Shiping</p>
                    <p>$16.00</p>
                  </div>
                  <div className="subtotal xz__end">
                    <h4>Total</h4>
                    <h3>${(totalPrice+16)?.brm()}</h3>
                  </div>
              </div>
              <div className="payment">
                 <h2>Payment Method</h2>
                 <div className="method">
                    <div className="method__content">
                      <input type="radio" />
                        <img src={card} alt="" />
                    </div>
                    <div className="method__content">
                      <input type="radio" />
                        <p>Dorect bank transfer</p>
                    </div>
                    <div className="method__content">
                      <input type="radio" />
                        <p>Cash on delivery</p>
                    </div>
                    <button type='submit'>Place Order</button>
                 </div>
              </div>
            </div>       
        </div>
    </div>


    </>
  )
}

export default Login