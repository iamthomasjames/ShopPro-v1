import asyncHandler from "../middleware/asyncHandler.js";
import User from '../modals/user.js'
import generateToken from "../utils/generateToken.js";

const authUser  = asyncHandler(async (req,res)=>{
    const {userName, password} = req.body
   const user = await User.findOne({email:userName});
   if(user && (await user.matchPassword(password)))
   {
    generateToken(res,user._id);
    res.json({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin
    })
   }
   else{
    res.status(401);
    throw new Error('Invalid email or password');
   }
})

const registerUser  = asyncHandler(async (req,res)=>{
    const {name, email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
        res.status(400).json({message:"user is already registered"});
    }else{
        const user=await User.create({name, email, password});
        if(user){
            generateToken(res,user._id);
            res.status(200).json({message:"user created successfully"})
        }
        else{
            res.status(400).json({message:"user not created"});
        }
    }
})

const logoutUser  = asyncHandler(async (req,res)=>{
    res.cookie('jwt','',{
        httpOnly:true,
        expires:new Date(0)
    })
    res.status(200).json({message: 'Logged out successfully'})
})

const getUserProfile  = asyncHandler(async (req,res)=>{
   const profile = await  User.find({_id:req.user._id});
   if(profile){
    res.status(200).json(profile);
   }else{
    res.status(404);
    throw new Error('user not found');
   }
})

const updateUserProfile  = asyncHandler(async (req,res)=>{
    const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
})

const getUsers  = asyncHandler(async (req,res)=>{
    const usersList = await User.find({});
    if(usersList)
    {
        res.status(200).json(usersList);
    }
    else{
        res.status(404);
        throw new Error('user list not found');
    }
    
})

const deleteUser  = asyncHandler(async (req,res)=>{
    const user = await User.findById(req.params.id);

    if (user) {
      if (user.isAdmin) {
        res.status(400);
        throw new Error('Can not delete admin user');
      }
      await User.deleteOne({ _id: user._id });
      res.json({ message: 'User removed' });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
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