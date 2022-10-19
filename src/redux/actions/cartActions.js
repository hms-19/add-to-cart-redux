import { ActionTypes } from "../constants"


export const addToCartAction = (product) => {
    return {
        type : ActionTypes.ADD_TO_CART,
        payload : product
    }
}

export const removeFromCartAction = (productId) => {
    return {
        type : ActionTypes.REMOVED_FROM_CART,
        payload : productId
    }
}