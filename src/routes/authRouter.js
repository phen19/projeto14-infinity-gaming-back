import { Router } from "express";


const authRouter = Router();


authRouter.post("/sign-up", signUpUser);


export default authRouter;