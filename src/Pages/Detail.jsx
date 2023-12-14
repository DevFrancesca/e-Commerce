import { useEffect, useState, useContext} from "react"
import { useParams } from "react-router-dom"
import { Context } from "../context/Context"
import './Detail.css'

const Detail=()=>{
    const {id} =useParams()
    const {dispatch} = useContext (Context)
    // const [products, setProducts] = useState([])
    const [details, setDetails] =useState({})

useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=> setDetails(json))
}, [])

// const addToCart = (produce) => {
//     setCartItems([...cartItems, produce])
//   }
    return(
        <div className="productDetailCon">
            <div className='productDetails'>
            <img src={details.image} alt="Product image" />
            <h3>{details.title}</h3>
            <p>${details.price}</p>
            <div className="cartBtn1">
                <button onClick={()=> dispatch({type: "add to cart", payload: details})}>Add to cart</button>
            </div>
          </div>
        </div>
    )
}
export default Detail