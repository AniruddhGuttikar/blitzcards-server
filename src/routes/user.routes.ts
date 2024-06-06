import { Router } from "express";

import {
  createUser,
  deleteUserById,
  fetchUserById,
  updateUserById,
} from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/:id", fetchUserById);
userRouter.post("/", createUser);
userRouter.delete("/:id", deleteUserById);
userRouter.patch("/:id", updateUserById);

export default userRouter;
