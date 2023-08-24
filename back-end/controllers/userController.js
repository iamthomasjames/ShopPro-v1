import asyncHandler from "../middleware/asyncHandler.js";



const authUser  = asyncHandler(async (req,res)=>{
    res.send('Auth user');
})

const registerUser  = asyncHandler(async (req,res)=>{
    res.send('Register user');
})

const logoutUser  = asyncHandler(async (req,res)=>{
    res.send('logout user');
})

const getUserProfile  = asyncHandler(async (req,res)=>{
    res.send('get user profile');
})

const updateUserProfile  = asyncHandler(async (req,res)=>{
    res.send('update user profile');
})

const getUsers  = asyncHandler(async (req,res)=>{
    res.send('get users');
})

const deleteUser  = asyncHandler(async (req,res)=>{
    res.send('delete user');
})

const getUserById  = asyncHandler(async (req,res)=>{
    res.send('get user by id');
})

const updateUser  = asyncHandler(async (req,res)=>{
    res.send('update user by id');
})

export {authUser,
registerUser,
logoutUser,
getUserProfile,
updateUserProfile,
getUsers,
deleteUser,
getUserById,
updateUser}