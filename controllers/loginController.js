import { comparePassword } from "../helpers/authHelper.js"
import userModel from "../models/user.model.js"
import JWT from 'jsonwebtoken'

const loginController = async (req,res) => {
    try {
        const {email, password} = req.body

        //validation
        if(!email || !password){
            res.status(403).send({
                success: false,
                message: "Password or email not found"
            })
        }
        const user = await userModel.findOne({email})
        if(!user){
            //return kyuki agar user nhi mila toh code end ho jayega
            return res.status(404).send({
                success: false,
                message: "Email not found"
            })
        }

        const matched = await comparePassword(password, user.password);
        if(!matched){
            return res.status(200).send({
                success: false,
                message: "Password did not matched"
            })
        }

        //token
        const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET, {expiresIn: '7d'})
        res.status(200).send({
            success:true,
            message:"login succesdfully",
            user,
            token
        })
        
    } catch (error) {
        console.log("Error in login", error)
        res.status(500).send({
            success:false,
            message: "Error in login",
            error
        })
    }
}

export default loginController;