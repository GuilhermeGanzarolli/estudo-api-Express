import { Router } from "express";
import * as UserController from "./controller/users-controller";

export const router = Router()

router.get("/users", UserController.getUsers)
router.post("/users", UserController.postUser)
router.get("/users/:id", UserController.getUserById)
router.delete("/users/:id", UserController.deleteUser)
router.patch("/users/:id", UserController.updateUser)