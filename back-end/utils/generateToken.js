import jwt from 'jsonwebtoken';

const generateToken=(res,_id)=>{
    const token = jwt.sign({_id:_id},process.env.JWT_SECRET,{expiresIn:3600})
    res.cookie('jwt',token,{
        httpOnly:true,
        secure : process.env.NODE_ENV  !== 'development',
        sameSite:'strict',
        maxAge: 24*60*60*1000
    });
}

export default generateToken;