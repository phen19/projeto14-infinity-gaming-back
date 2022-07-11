import { Router } from "express";
import { bannerDeleteController, bannerPostController, getAllBanners } from "../controllers/admimControllers.js";
import bannerMiddleware from "../middlewares/bannermiddleware.js";


const admimRouter = Router();

admimRouter.get("/banners", getAllBanners);
admimRouter.post("/banners", bannerMiddleware, bannerPostController);
admimRouter.delete("/banners/:id", bannerDeleteController);


export default admimRouter;