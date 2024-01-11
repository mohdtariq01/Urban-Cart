import JWT from 'jsonwebtoken'
import userModel from '../models/user.model.js'

//prottected route token based

export const requiredSignIn = async (req, res, next)=>{
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET)
        req.user = decode
        next()
    } catch (error) {
        console.log(error)
    }
}

export const adminAccess = async (req, res, next)=>{
    try {
        const user = await userModel.findById(req.user._id);
        if(user.role !== 1){
            res.status(401).send({
                success:false,
                message: "Unauthorized access|| Not an admin"
            })
        }else{
            next();
        }
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success:false,
            message:"Unauthorized access error in admin middleware",
            error
        })
    }
}