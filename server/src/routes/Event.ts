import express from "express";
import EventController from "../controllers/Event";
const router = express.Router();

router.post("/event", EventController.create);
router.get("/event", EventController.list);
router.get("/event/:id", EventController.find);
router.put("/event/:id", EventController.update);
router.delete("/event/:id", EventController.delete);

export default router;
