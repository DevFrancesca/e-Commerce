import React, { useContext, useEffect } from 'react'
import './Cart1.css'
import { Context } from '../context/Context'
import { useDispatch, useSelector } from 'react-redux'
import {increase, decrease, remove, removeAll} from '../features/Slice'


const Cart1 = () => {
  const cartHold = useSelector((e)=>e.cart)
  const dispatch = useDispatch()
  const {Mode, cart, total} = useContext(Context)

  // useEffect(()=>{
  //   setTotal(cart.reduce((p, e) => e.price*e.QTY + p, 0))
  // }, [cart, total])
  return (
    <div className={Mode === false ? "Cartbody" : "cartbodydark"}>
      <div className='Total'>Total: ${total}</div>
      <button onClick={()=> dispatch(removeAll(e.id))}>Remove all</button>
      <div className='CartContainer'>
       {
        cartHold?.map((e)=>(
          <div key={e.id} className="products">
          <img src={e.image} alt="image" />
          <h4>{e.title}</h4>
          <p>${e.price}</p>
          <div className="Btns">
            <button onClick={()=> dispatch(increase(e.id))}>+</button>
            <button onClick={()=> dispatch(decrease(e.id))}>-</button>
          </div>
          <p>QTY:{e.QTY}</p>
          <button onClick={()=> dispatch(remove(e.id))}>Remove</button>

        </div>
        ))
       }
      </div>
    </div>
  )
}

export default Cart1