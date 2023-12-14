import React, {useEffect, useState, useContext} from 'react'
import { Link} from 'react-router-dom'
import { Context } from './context/Context'
import './Body.css'
import { useDispatch } from 'react-redux'
import { addToCart } from './features/Slice'
import axios from 'axios'



const Body = () => {
const dispatch = useDispatch()
  const {mode} = useContext (Context)
    const [products, setProducts] = useState([])
    const [networkError, setNetworkError] = useState()
    const [loading, setLoading] = useState(false)

    
    // useEffect(()=>{
    //   const getProducts = () => {
    //     setLoading(true)
    //     fetch('https://fakestoreapi.com/products')
    //             .then((res)=>res.json())
    //             .then((json)=> {
    //               setProducts(json)
    //               setLoading(false)
    //             })
    //             .catch(error=> setNetworkError(error.message))
    //   }
    //   getProducts()
    // }, [])

   useEffect(()=>{
    const getProducts = ()=>{
      setLoading(true)
      axios.get('https://fakestoreapi.com/products')
      .then((response)=>{
       console.log(response.data)
       setProducts(response.data)
       setLoading(false)
      })
      .catch(error=> setNetworkError(error.message))
    }
    getProducts()
   }, [])

  console.log(networkError)

  return (
    <div className={mode ?'body' : 'darkBody'}>
    {
      products?.map((product)=>{
        return(
          <div  key={product.id}  className={mode ?'productWrap' :'darkProductWrap'}>
          <Link to={`/detail/${product.id}`} className="imageCon">
            <img src={product.image} alt="" />
          </Link>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={()=> dispatch(addToCart(product))}>Add to cart</button>
            {/* <button onClick={()=> dispatch({type: "cart/addToCart", payload: product})}>Add to cart</button> */}

          </div>
        )
      })
    }
     {
        networkError === 'Failed to fetch' &&
        <p>No network. Check internet connection</p>
      }

{
      loading && 
      <p>Please wait awhile</p>
    }
  </div>
  )
}

export default Body
