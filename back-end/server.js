import express from 'express'
import products from './data/products.js'
import 'dotenv/config'
import  { MongoClient, ServerApiVersion } from 'mongodb';
import connectDb from './config/db.js';
import productRoute from './routes/productRoutes.js'
import userRoute from './routes/userRoutes.js'
import orderRoute from './routes/orderRoutes.js'

import {errorHandler} from './middleware/errorHandler.js'
import cookieParser from 'cookie-parser';
const app = express();
app.use(express.json()); // to parse incoming JSON requests and make the parsed data available in the req.body
app.use(express.urlencoded({ extended:true})); // middleware parses incoming URL-encoded requests and makes the parsed data available in the req.body
app.use(cookieParser()); // Use the cookieParser() middleware to parse cookies
connectDb();


app.get('/',(req,res)=>{
    res.send("Api sending success responce");
})

app.use('/api/products/',productRoute);
app.use('/api/users/',userRoute);
app.use('/api/orders/',orderRoute);


app.use(errorHandler);


app.listen(5000,(req,res)=>{
    console.log("listning")
})
