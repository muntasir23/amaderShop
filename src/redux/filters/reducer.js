import { SEARCH } from "./actionTypes";
import { initialState } from "./initialState";

const filterReducer = (state = initialState , action) =>{
    switch (action.type) {
        case SEARCH:
         return state = action.payload
    
        default:
            return state
    }
}

export default filterReducer