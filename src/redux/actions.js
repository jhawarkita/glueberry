import {UPDATE_DISPLAY_CATEGORY, SELECTED_PRODUCT_DETAILS} from "./actionTypes"

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
    console.log("in action")
    return new Promise((resolve, reject) =>{
        fetch("http://localhost:3005/products/category/"+selectedCategory)
        .then(res => res.json())
        .then(res=>{
            resolve(res["data"])
        })
        .catch(err => reject(err))
    })
}

export function addToWishlist(productId){
    let favorite = false;
    fetch("http://localhost:3005/products/"+productId)
    .then(res => res.json())
    .then(res=>{
           favorite = res["data"]["Favorite"]
        })
    .then(()=>{
        fetch("http://localhost:3005/products/"+productId,{
            method: 'PUT',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({"Favorite":!favorite})
        })
    })
}