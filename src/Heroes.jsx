import React, { useContext } from 'react'
import './Heroes.css'
import { Context } from './context/Context'

const Heroes = () => {
  const {product, dispatch} = useContext(Context)
  return (
    <div className='heroesCon'>
      <div className="textCon">
        <h2>CHESZO FASHION</h2>
        <h4>EXPLORE YOUR CREATIVE FASHION AND CREATE LASTING IMPRESSION</h4>
        <p>What fashion statement would you like to make? 
          <br/>Refresh your style with on-trend pieces from our collection.</p>
        <span>UNLEASH YOUR INNER BEAUTY @ CHESZO FASHION</span>
        <button onClick={()=>dispatch({type: "add to cart", payload:product})}>Shop Now</button>
      </div>
    </div>
  )
}

export default Heroes
