import express from "express";
import MessageController from "../controllers/Message";
const router = express.Router();

router.post("/messages", MessageController.create);
router.get("/messages", MessageController.list);
router.get("/messages/:id", MessageController.find);
router.put("/messages/:id", MessageController.update);
router.delete("/messages/:id", MessageController.delete);

export default router;
