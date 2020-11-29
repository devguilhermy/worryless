import express from "express";
import EventController from "../controllers/Event";
const router = express.Router();

router.post("/", EventController.create);
router.get("/", EventController.list);
router.get("/:id", EventController.find);
router.put("/:id", EventController.update);
router.delete("/:id", EventController.delete);

export default router;
