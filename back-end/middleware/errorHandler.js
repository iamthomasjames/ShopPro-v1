

const errorHandler = (err,req, res, next)=>{
    console.log(res.statusCode)
    res.status(404).json({
        message:err.message,
        stack:err});
  
}

export  {errorHandler}