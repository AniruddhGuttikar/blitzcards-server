import { Router } from "express";

import {
  fetchAllCollections,
  fetchCollectionById,
  createCollection,
  deleteCollectionById,
  updateCollectionById,
} from "../controllers/collection.controller.js";

const collectionRouter = Router();

collectionRouter.get("/", fetchAllCollections);
collectionRouter.get("/:id", fetchCollectionById);
collectionRouter.put("/", createCollection);
collectionRouter.delete("/:id", deleteCollectionById);
collectionRouter.patch("/:id", updateCollectionById);

export default collectionRouter;
