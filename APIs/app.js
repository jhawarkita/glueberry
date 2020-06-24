const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product");

mongoose.connect("mongodb://localhost/glueberry",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","*");
    if(req.method === "OPTIONS"){
        req.header('Access-Control-Allow-Methods','PUT,POST,DELETE,GET')
        return res.status(200).json({})
    }
    next();
})

app.use('/products',productRoutes);
//app.use('./orders',orderRoutes);

module.exports = app;