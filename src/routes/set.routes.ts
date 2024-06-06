import express from "express";
import {
  createSet,
  updateSetById,
  deleteSetById,
  fetchAllSets,
  fetchSetById,
} from "../controllers/set.controller";

const setRouter = express.Router();

setRouter.get("/", fetchAllSets);
setRouter.get("/:id", fetchSetById);
setRouter.patch("/:id", updateSetById);
setRouter.post("/", createSet);
setRouter.delete("/:id", deleteSetById);

export default setRouter;
