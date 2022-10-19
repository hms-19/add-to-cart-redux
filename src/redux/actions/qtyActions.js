import { ActionTypes } from "../constants"


export const qtyIncreaseAction = (productId) => {
    return {
        type : ActionTypes.INCREASE_QTY,
        payload : productId
    }
}

export const qtyDecreaseAction = (productId) => {
    return {
        type : ActionTypes.DECREASE_QTY,
        payload : productId
    }
}