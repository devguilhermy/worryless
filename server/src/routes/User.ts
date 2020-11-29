import express from "express";
import UserController from "../controllers/User";
const router = express.Router();

router.post("/", UserController.create);
router.get("/", UserController.list);
router.get("/:id", UserController.find);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

export default router;
