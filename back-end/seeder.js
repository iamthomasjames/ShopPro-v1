import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';  
import users from './data/user.js'
import products from './data/products.js'
import Product from './modals/product.js'
import User from './modals/user.js'
import Order from './modals/order.js'
import connectDb from './config/db.js'

dotenv.config();
connectDb();

const importData= async()=>{
    try{
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();
        const createdUsers=await User.insertMany(users);
        const adminUserId = createdUsers[0]._id
        const sampleProducts= products.map(item=>{
            return ({...item, user:adminUserId})
        })
        await Product.insertMany(sampleProducts);
        console.log('Data Imported'.green.inverse)
        process.exit();
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

const destroyData=async()=>{
    try{
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();
        console.log('Data Destroyed'.red.inverse)
        process.exit();
    }
    catch(err){

    }
}

if(process.argv[2]==='-d')
{
    destroyData();
}else{
    importData();   
}