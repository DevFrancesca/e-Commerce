import { createSlice } from "@reduxjs/toolkit" ;

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart:[]
    },
    reducers: {
        addToCart : (state, action)=>{
            const check = state.cart.findIndex((e)=>e.id === action.payload.id)
            if(check >= 0){
              state.cart[check].QTY+=1
              return state
            }else{
                const items = {...action.payload, QTY:1}
                state.cart.push(items)
                return state
            }
        },
        increase: (state, action)=>{
            const id = action.payload; 
        const check = state.cart.findIndex((e)=>e.id === id)
        state.cart[check].QTY+=1
        return state
        },

        decrease: (state, action)=>{
            const id = action.payload; 
            const check = state.cart.findIndex((e)=>e.id === id)
            const decreaseQty = state.cart[check].QTY-=1
            if(decreaseQty >0){
            return state
            }else{
            state.cart.filter((item) => item.id !== action.payload.id);
            }
        },
        remove: (state, action)=>{
            const id = action.payload;
            state.cart = state.cart.filter((e) => e.id !== id);
            return updateCart;
        },

        removeAll: ()=>{
            return []
        },
    }
})

export const {addToCart, increase, decrease, remove, removeAll} = CartSlice.actions
export default CartSlice

































