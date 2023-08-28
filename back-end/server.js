import express from 'express'
import products from './data/products.js'
import 'dotenv/config'
import  { MongoClient, ServerApiVersion } from 'mongodb';
import connectDb from './config/db.js';
import productRoute from './routes/productRoutes.js'
import userRoute from './routes/userRoutes.js'
import {errorHandler} from './middleware/errorHandler.js'
import cookieParser from 'cookie-parser';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(cookieParser());
connectDb();


app.get('/',(req,res)=>{
    res.send("Api sending success responce");
})

app.use('/api/products/',productRoute);
app.use('/api/users/',userRoute);

app.use(errorHandler);


app.listen(5000,(req,res)=>{
    console.log("listning")
})