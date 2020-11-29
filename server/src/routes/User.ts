import express from "express";
import UserController from "../controllers/User";
const router = express.Router();

router.post("/users", UserController.create);
router.get("/users", UserController.list);
router.get("/users/:id", UserController.find);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);

export default router;
