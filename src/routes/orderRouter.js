import { Router } from "express";
import { insertOrder } from "../controllers/orderController.js";
import orderMiddleware from "../middlewares/orderMiddleware.js";

const orderRouter = Router();

orderRouter.post("/order", orderMiddleware,insertOrder);

export default orderRouter