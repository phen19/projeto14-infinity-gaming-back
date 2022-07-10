import { Router } from "express";
import { insertOrder } from "../controllers/orderController.js";

const orderRouter = Router();

orderRouter.post("/order", insertOrder);

export default orderRouter