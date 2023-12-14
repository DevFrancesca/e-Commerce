import React, { useEffect, useState } from 'react'
import './Category.css'
import axios from 'axios'

const Category = () => {
  const[categories, setCategories] =useState([])
  const[categoriesInfo, setCategoriesInfo] =useState([])
  const [networkError, setNetworkError] = useState()

  
  // useEffect(()=>{
  //   fetch('https://fakestoreapi.com/products/categories')
  //           .then(res=>res.json())
  //           .then(json=>setCategories(json))
  //           // .then(json=>console.log(json))
  //           fetch(`https://fakestoreapi.com/products/category/electronics`)
  //           .then(res=>res.json())
  //           .then(json=>setCategoriesInfo(json))
  // },[])

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/categories')
    .then((response)=>{
      console.log(response.data)
      setCategories(response.data)
    })
    .catch(error=> setNetworkError(error.message))
  },[])

  // const getCategoryInfo = (category) => {
  //   fetch(`https://fakestoreapi.com/products/category/${category}`)
  //           .then(res=>res.json())
  //           .then(json=>setCategoriesInfo(json))
  //           .catch(error=> setNetworkError(error.message))
  // }

  const getCategoryInfo = (category)=>{
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
    .then((response)=>{
      console.log(response.data)
      setCategoriesInfo(response.data)
    })
    .catch(error=> setNetworkError(error.message))
  }

  console.log(categoriesInfo)
  

  return (
    <div className='categoryBody'>
          <div className='textWrap'>
      {
        categories?.map((category, index)=>{
          return(
            <h3 key={index} onClick={() => getCategoryInfo(category)}>{
              category === "men's clothing" ?
              "Men's-clothing":
              category === "women's clothing" ?
              "Women's-clothing" :
              typeof category === 'string' ? category.charAt(0).toUpperCase() + category.slice(1) : null         
              }

            </h3>
          )
        })
      }
    </div>

        {
          categoriesInfo.map((categoryinfo)=>{
            return(
              <div className="categoriesWrap">
                <img src={categoryinfo.image} alt="" />
                <p>${categoryinfo.price}</p>
                <h4>{categoryinfo.title}</h4>
              </div>
            )
          })
        }
         {
            networkError === 'Failed to fetch' &&
            <p>No network. Check internet connection</p>
         }
      
    </div>
  )
}

export default Category
