import express from "express";
import ContactController from "../controllers/Contact";
const router = express.Router();

router.post("/", ContactController.create);
router.get("/", ContactController.list);
router.get("/:id", ContactController.find);
router.put("/:id", ContactController.update);
router.delete("/:id", ContactController.delete);

export default router;
