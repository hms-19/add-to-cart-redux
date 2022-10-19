import { ActionTypes } from "../constants"

const initialState = {
    cart : []
}

export const cartReducer = (state = initialState,{type,payload}) => {
    // console.log(type)
    switch(type){
        case ActionTypes.ADD_TO_CART : if(state.cart.filter(c => c.product.id == payload.id).length !== 0){
            return {
                ...state,
                cart : state.cart.map((c) => {
                    // console.log(c)
                    if(c.product.id === payload.id) c.qty++
                    
                    return c
                })
            }
        }else{
            return {
                ...state,
                cart : [...state.cart,{"product":payload,"qty" : 1} ]
            }
        }
        case ActionTypes.REMOVED_FROM_CART : return {
            ...state,
            cart : state.cart.filter(c => c.product.id !== payload)
        }
        case ActionTypes.INCREASE_QTY : //console.log(state.cart[0].product.id) 
        return {
            ...state,
            cart : state.cart.map((c) => {
                // console.log(c)
                if(c.product.id === payload) c.qty++
                
                return c
            })
        }
        case ActionTypes.DECREASE_QTY : return {
            ...state,
            cart : state.cart.filter(prod => {
                if(prod.product.id ==  payload && prod.qty !== 1) {
                    prod.qty--
                    return prod
                }
                else if(prod.product.id !==  payload && prod.qty === 1){
                    return prod
                }
            } )
        }
        default : return state;
    }
}