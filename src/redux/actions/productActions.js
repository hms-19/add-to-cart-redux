import { ActionTypes } from "../constants"


export const setProduct = (products) => {
    return {
        type : ActionTypes.SET_PRODUCT,
        payload : products
    }
}

