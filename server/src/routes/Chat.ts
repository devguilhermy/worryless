import express from "express";
import ChatController from "../controllers/Chat";
const router = express.Router();

router.post("/chats", ChatController.create);
router.get("/chats", ChatController.list);
router.get("/chats/:id", ChatController.find);
router.put("/chats/:id", ChatController.update);
router.delete("/chats/:id", ChatController.delete);

export default router;
