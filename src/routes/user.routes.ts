import { response, Router } from "express";
import{UserController} from "../resources/user/dtos/user.controllers";

const userRouter = Router();
const userController = new UserController();

userRouter.get("/signin", userController.signin)
userRouter.post("/signup", userController.signup)

export default userRouter;
