import { createContext, useState, useReducer, useEffect } from "react";
const initialState =[];

const reducer =(state, action)=>{
  switch(action.type){
    case "add to cart" :{
      // if(state.length == 0){
      //   const QTY = 1
      //   return [...state, {...action.payload, QTY: QTY}]
      // }else{
      //   const check= state.findIndex((e)=> e.id === action.payload.id)
      //   console.log(check)
      //   if(check >= 0){
      //     return[...state, {...action.payload, QTY: 1}]
      //   }else{
      //     state[check].QTY += 1
      //   }
      // }

      const check = state.findIndex((e)=>e.id === action.payload.id)
      if(check >= 0){
        state[check].QTY+=1
        return[...state]
      }else{
        return[...state, {...action.payload, QTY:1}]
      }
    }

    case 'increase cart':{
      const check = state.findIndex((e)=>e.id === action.payload.id)
      state[check].QTY+=1
      return[...state]
    }
    case 'decrease cart':{
      const check = state.findIndex((e)=>e.id === action.payload.id)
      const decreaseQty = state[check].QTY-=1
      if(decreaseQty >0){
        return[...state]
      }else{
        return state.filter((item) => item.id !== action.payload.id);
      }
    }
    case 'remove from cart' :{
      const updateCart = state.filter((item) => item.id !== action.payload.id);
      return updateCart;
    }

    case 'clear all' :{
      return []
    }
    
    default: return state
  }
}

export const Context = createContext();


const ContextProvider = ({children}) => {
  const [mode, setMode] = useState(false)
  const [cart, dispatch] = useReducer(reducer, initialState)
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    setTotal(cart.reduce((p, e) => e.price*e.QTY + p, 0))
  }, [cart, total])
  return (
    <Context.Provider value={{mode, setMode, dispatch, cart, total}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider

