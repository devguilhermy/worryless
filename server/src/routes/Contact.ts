import express from "express";
import ContactController from "../controllers/Contact";
const router = express.Router();

router.post("/contact", ContactController.create);
router.get("/contact", ContactController.list);
router.get("/contact/:id", ContactController.find);
router.put("/contact/:id", ContactController.update);
router.delete("/contact/:id", ContactController.delete);

export default router;
