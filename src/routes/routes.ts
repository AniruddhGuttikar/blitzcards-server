import { Router } from "express";
import collectionRouter from "./collection.routes";

const router = Router();

router.use("/user");
router.use("/collection", collectionRouter);
router.use("/collection/:collectionId/set");
router.use("/collection/:collectionId/:setId/flashcard");

export default Router;
