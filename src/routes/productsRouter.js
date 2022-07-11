import { Router } from "express";
import { getProducts } from "../controllers/productsController.js";
import validateUser from "../middlewares/validateUser.js";

const productsRouter = Router();

productsRouter.get("/products",validateUser, getProducts);

export default productsRouter