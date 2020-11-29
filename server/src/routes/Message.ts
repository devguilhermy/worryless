import express from "express";
import MessageController from "../controllers/Message";
const router = express.Router();

router.post("/", MessageController.create);
router.get("/", MessageController.list);
router.get("/:id", MessageController.find);
router.put("/:id", MessageController.update);
router.delete("/:id", MessageController.delete);

export default router;
