import { Router } from "express";
import userRouter from "./user.routes.js";
import collectionRouter from "./collection.routes.js";
import setRouter from "./set.routes.js";
import flashcardRouter from "./flashcard.routes.js";

const router = Router();

router.use("/user", userRouter);
router.use("/collection", collectionRouter);
router.use("/collection/:collectionId/set", setRouter);
router.use("/collection/:collectionId/:setId/flashcard", flashcardRouter);

export default Router;
