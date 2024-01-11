import { hashpassword } from '../helpers/authHelper.js  ';
import userModel from '../models/user.model.js'

const registerController = async (req, res) => {
    // Your controller logic here
    try {
      const {name, email, password, phone, address} = req.body
      //validation
      if(!name){
        return res.send({error:'Name is required'})
      }
      if(!email){
        return res.send({error:'Email is required'})
      }
      if(!password){
        return res.send({error:'Password is required'})
      }
      if(!phone){
        return res.send({error:'Phone is required'})
      }

      //check whether user already exist or not
      const existingUser = await userModel.findOne({email})
      if(existingUser){
        res.status(200).send({
          success:true,
          message: "User already exist"
        })
      }

      //register user
      const hashedPassword = await hashpassword(password);
      //save
      const user = await new userModel({name, email, phone, address, password:hashedPassword}).save();

      res.status(201).send({
        success:true,
        message:"User registered successfully",
        user
      })

    } catch (error) {
      console.log(error)
      res.status(500).send({
        success:false,
        message:"Error in registration",
        error
      })
    }

  };

  export const testController = (req, res)=>{
    res.send("Protected!!!!")
  }
  
  export default registerController;
  
