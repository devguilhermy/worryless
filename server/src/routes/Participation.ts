import express from "express";
import ParticipationController from "../controllers/Participation";
const router = express.Router();

router.post("/participation", ParticipationController.create);
router.get("/participation", ParticipationController.list);
router.get("/participation/:id", ParticipationController.find);
router.put("/participation/:id", ParticipationController.update);
router.delete("/participation/:id", ParticipationController.delete);

export default router;
