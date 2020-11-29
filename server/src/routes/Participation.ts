import express from "express";
import ParticipationController from "../controllers/Participation";
const router = express.Router();

router.post("/", ParticipationController.create);
router.get("/", ParticipationController.list);
router.get("/:id", ParticipationController.find);
router.put("/:id", ParticipationController.update);
router.delete("/:id", ParticipationController.delete);

export default router;
