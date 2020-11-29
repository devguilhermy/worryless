import express from "express";
import ChatController from "../controllers/Chat";
const router = express.Router();

router.post("/", ChatController.create);
router.get("/", ChatController.list);
router.get("/:id", ChatController.find);
router.put("/:id", ChatController.update);
router.delete("/:id", ChatController.delete);

export default router;
