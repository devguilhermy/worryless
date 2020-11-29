import express from "express";
import MonitoringController from "../controllers/Monitoring";
const router = express.Router();

router.post("/monitoring", MonitoringController.create);
router.get("/monitoring", MonitoringController.list);
router.get("/monitoring/:id", MonitoringController.find);
router.put("/monitoring/:id", MonitoringController.update);
router.delete("/monitoring/:id", MonitoringController.delete);

export default router;
