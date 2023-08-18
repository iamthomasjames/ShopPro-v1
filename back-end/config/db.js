import mongoose from 'mongoose'

const connectDb =async()=>{
    await mongoose.connect(process.env.mongoDb)
    .then(() => console.log('Connected!'));
}

export default connectDb;
