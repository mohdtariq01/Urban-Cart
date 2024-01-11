import express from "express";
import registerController from "../controllers/authController.js";
import loginController from "../controllers/loginController.js";
import { testController } from "../controllers/authController.js";
import { adminAccess, requiredSignIn } from "../middleware/authMiddleware.js";

const router = express.Router();

//routing
//REGISTER
router.post('/register',registerController)

//LOGIN
router.post('/login', loginController)

router.get('/test', requiredSignIn, adminAccess, testController)


export default router;