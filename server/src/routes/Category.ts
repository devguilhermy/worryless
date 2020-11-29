import express from "express";
import CategoryController from "../controllers/Category";
const router = express.Router();

router.post("/", CategoryController.create);
router.get("/", CategoryController.list);
router.get("/:id", CategoryController.find);
router.put("/:id", CategoryController.update);
router.delete("/:id", CategoryController.delete);

export default router;
