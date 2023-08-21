import express from 'express'
import products from './data/products.js'
import 'dotenv/config'
import  { MongoClient, ServerApiVersion } from 'mongodb';
import connectDb from './config/db.js';
import productRoute from './routes/productRoutes.js'
const app = express();
connectDb();


app.get('/',(req,res)=>{
    res.send("Api sending success responce");
})

app.use('/api/products/',productRoute);


app.listen(5000,(req,res)=>{
    console.log("listning")
})