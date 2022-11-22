import express from "express";
import { Remove, edit, logout, see } from "../controllers/userController";


const userRouter = express.Router();


userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/delete", Remove);
userRouter.get("/:id", see);

export default userRouter;