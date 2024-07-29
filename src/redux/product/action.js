import { ADDED } from "./actionTypes"

export const added = (products) => {
    return {
        type: ADDED,
        payload: products
    }
}