import  { useContext, useEffect, useState } from 'react'
import './Header.css'
import LO from './images/logo1.png'
import Sun from './images/sun.jpg'
import Moon from './images/moon.jpg'
import { NavLink } from 'react-router-dom'
import { Context } from './context/Context'
import { useSelector } from 'react-redux'


const Header = () => {
  const cartHold = useSelector((event)=> event.cart)
  console.log("from redux", cartHold)
  const {mode, setMode, cart, dispatch} = useContext(Context)
  const [cartItem, setCartItem]= useState()

useEffect(()=>{
  const total = cartHold.reduce((p, e)=> p+e.QTY, 0)
  setCartItem(total)
}, [cartHold])
  return (
    <div className={mode ? 'navigation' :'darkNavigation'}>
      <div className="navWrap">
        <div className="imgWrap">
        <img src={LO} alt="" />
        </div>
        <ul>
          <NavLink to="/" className={({isActive})=> isActive ? "active" : "inactive"}>HOME</NavLink>
          <NavLink  to="/category"className={({isActive})=> isActive ? "active" : "inactive"}>CATEGORIES</NavLink>
          <NavLink to="/cart1" className={({isActive})=> isActive ? "active" : "inactive"}>CART</NavLink>      
          <NavLink to="/cart1" className={({isActive})=> isActive ? "active" : "inactive"}>{cartItem}</NavLink>      
        </ul>
  
        <div style={{position: "relative"}} className={mode?"Btn" : "darkBtn"} onClick={()=> setMode(!mode)}>
        <div className={mode? "round":"darkRound"}>
          <img src={mode? Sun : Moon} alt="" />
        </div>
        </div>
      </div>

    </div>
  )
}

export default Header
