import express from 'express'
import products from './data/products.js'
import 'dotenv/config'
import  { MongoClient, ServerApiVersion } from 'mongodb';
import connectDb from './config/db.js';
const app = express();
connectDb();


app.get('/',(req,res)=>{
    res.send("Api sending success responce");
})

app.get('/product',(req,res)=>{
    res.json(products);
})

app.get('/product/:id',(req,res)=>{
    console.log(req.params.id)
    const items= products.find((item)=>{  item.product_id === req.params.id})
    console.log(items)
    res.json(items);
})


app.listen(5000,(req,res)=>{
    console.log("listning")
})