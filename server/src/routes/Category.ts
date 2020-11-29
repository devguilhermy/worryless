import express from "express";
import CategoryController from "../controllers/Category";
const router = express.Router();

router.post("/categories", CategoryController.create);
router.get("/categories", CategoryController.list);
router.get("/categories/:id", CategoryController.find);
router.put("/categories/:id", CategoryController.update);
router.delete("/categories/:id", CategoryController.delete);

export default router;
