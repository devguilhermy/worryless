import express from "express";
import MonitoringController from "../controllers/Monitoring";
const router = express.Router();

router.post("/", MonitoringController.create);
router.get("/", MonitoringController.list);
router.get("/:id", MonitoringController.find);
router.put("/:id", MonitoringController.update);
router.delete("/:id", MonitoringController.delete);

export default router;
