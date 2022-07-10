import { Router } from "express";
import { loginUser, signUpUser } from "../controllers/authController.js";
import loginMiddleware from "../middlewares/loginMiddleware.js";
import signUpMiddleware from "../middlewares/signUpMiddleware.js";


const authRouter = Router();


authRouter.post("/sign-up", signUpMiddleware, signUpUser);
authRouter.post("/", loginMiddleware, loginUser);

export default authRouter;