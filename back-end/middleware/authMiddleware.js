import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from '../modals/user.js'

// Protect routes

const protect = asyncHandler(async (req, res, next) => {
    const token = req.cookies.jwt
    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user= await User.findById(decoded._id).select('-password');
            next();
        } catch (error) {
            res.status(401);
            throw new Error('Invalid token');
        }
       

    }else{
        res.status(401);
        throw new Error('Not authorized, no token found');
    }

});

const admin =(req, res, next) => {
    if(req.user && req.user.isAdmin!=='false'){
        next();
    }else{
        res.status(401);
        throw new Error('Not authorized as admin');
    }
}

export {protect, admin};