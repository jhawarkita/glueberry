import {combineReducers} from "redux"
import {UPDATE_DISPLAY_CATEGORY, SELECTED_PRODUCT_DETAILS} from "./actionTypes"

const updateCategoryReducer = (state=[], action)=>{
    switch (action.type){
        case UPDATE_DISPLAY_CATEGORY:
            return action.data
        default:
            return state
    }

}
const selectedProductDetailsReducer = (state=[], action)=>{
    switch (action.type){
        case SELECTED_PRODUCT_DETAILS:
            return action.data
        default:
            return state
    }
}

export default combineReducers({
    selectedCategory: updateCategoryReducer,
    selectedProductDetails: selectedProductDetailsReducer
})