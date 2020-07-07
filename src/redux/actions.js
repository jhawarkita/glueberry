import {UPDATE_DISPLAY_CATEGORY, SELECTED_PRODUCT_DETAILS, CATEGORY_PRODUCTS, FAVORITE_PRODUCTS} from "./actionTypes"

export function updateDisplayCategory(itemSelected){
    return(dispatch)=>{
        dispatch({type:UPDATE_DISPLAY_CATEGORY, data: itemSelected})
    }
}

export function getSelectedProduct(productId, history){
    return (dispatch)=>{
        fetch("http://localhost:3005/products/"+productId)
        .then(res => res.json())
        .then(data => {
            dispatch({type:SELECTED_PRODUCT_DETAILS, data: data.data})
        })
        .then(history.push("/productView/"+productId))
    }
}

export function getProductsByCategory(selectedCategory){
    return (dispatch)=>{
            console.log("in action")
            return new Promise((resolve, reject) =>{
                fetch("http://localhost:3005/products/category/"+selectedCategory)
                .then(res => res.json())
                .then(res=>{
                    //resolve(res["data"])
                    dispatch({type:CATEGORY_PRODUCTS, data:res.data})
                })
                .catch(err => reject(err))
            })
    }
}

export function addToWishlist(productId, fav, selectedCategory){
    return (dispatch)=>{
        fetch("http://localhost:3005/products/"+productId,{
            method: 'PUT',
            headers:{"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify({"Favorite":!fav})
        })
        .then(res => res.json())
        .then(res =>{
                dispatch(getAllFavs())
                dispatch(getProductsByCategory(selectedCategory))
        })
    }
}

export function getAllFavs(){
    return (dispatch)=>{
        console.log("in action")
        return new Promise((resolve, reject) =>{
            fetch("http://localhost:3005/products/favorites/")
            .then(res => res.json())
            .then(res=>{
                //resolve(res["data"])
                dispatch({type:FAVORITE_PRODUCTS, data:res.data})
            })
            .catch(err => reject(err))
        })
}
}