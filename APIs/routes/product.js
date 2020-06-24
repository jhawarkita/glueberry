const express=require("express")
const router=express.Router();
const mongoose=require("mongoose");
const Product = require("../models/productModal");

router.get("/",(req,res,next)=>{
    Product.find().exec(function(err, product_details){
        if(err){
            res.status(500).json({
                status:"error",
                message:err
            })
        }
        res.status(200).json({
            message:"Retrived products!",
            data: product_details 
        })
    })
})

router.post("/",(req,res,next)=>{
    const product = new Product({
        _id: mongoose.Types.ObjectId(),
        Image:req.body.Image,
        Title:req.body.Title,
        Price:req.body.Price,
        Category:req.body.Category,
        Favorite:req.body.Favorite,
        Featured:req.body.Featured
    })
    product.save(function(err, product_details){
        if(err){
            res.status(500).json({
                status:"error",
                message:err
            })
        }
        res.status(201).json({
            message:"Added a new Product",
            product: product_details 
        })
    })
})

router.get("/:productId",(req,res,next)=>{
    const id = req.params.productId
    Product.findById(id).exec(function(err, product_details){
        if(err){
            res.status(500).json({
                status:"error",
                message:err
            })
        }
        res.status(200).json({
            message:"Individual Product details retrived",
            data: product_details 
        })
    })
})

router.get("/category/:category",(req,res,next)=>{
    const category = req.params.category;
    Product.find({"Category":category}).exec(function(err, product_details){
        if(err){
            res.status(500).json({
                status:"error",
                message:err
            })
        }
        res.status(200).json({
            message:"Retrived products respective to the category!",
            data: product_details 
        })
    })
})

module.exports = router;