import { Router, Request, Response } from "express";

import {
  createUser,
  deleteUserById,
  fetchUserById,
  updateUserById,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/:id", fetchUserById);
userRouter.post("/", createUser);
userRouter.get("/", (req: Request, res: Response) => {
  res.send("okay working");
});
userRouter.delete("/:id", deleteUserById);
userRouter.patch("/:id", updateUserById);

export default userRouter;
