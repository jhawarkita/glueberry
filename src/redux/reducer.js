import {combineReducers} from "redux"
import {UPDATE_DISPLAY_CATEGORY, SELECTED_PRODUCT_DETAILS, CATEGORY_PRODUCTS, FAVORITE_PRODUCTS} from "./actionTypes";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"

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

const categoryProductsReducer = (state=[], action)=>{
    switch (action.type){
        case CATEGORY_PRODUCTS:
            return action.data
       /*  case FAVORITE_PRODUCTS:
             var temp=[]
            temp = [...state, action.data]
            console.log("temp",Object.assign({}, ...state, action.data))
            return action.data */
        default:
            return state
    }
}

const favoriteProductsReducer = (state=[], action)=>{
    switch (action.type){
        case FAVORITE_PRODUCTS:
            return action.data
        default:
            return state
    }
}

//whitelist is the list of reducers we want to persist data of
const persistConfig = {
    key:"root",
    storage,
    whitelist : ["selectedCategory", "selectedProductDetails", "categoryProductsReducer"]
}

const rootReducer = combineReducers({
    selectedCategory: updateCategoryReducer,
    selectedProductDetails: selectedProductDetailsReducer,
    categoryProducts: categoryProductsReducer,
    favoriteProducts: favoriteProductsReducer
})
export default persistReducer(persistConfig, rootReducer)