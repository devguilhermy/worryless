import express from "express";
import ConfirmationController from "../controllers/Confirmation";
const router = express.Router();

router.post("/confirmations", ConfirmationController.create);
router.get("/confirmations", ConfirmationController.list);
router.get("/confirmations/:id", ConfirmationController.find);
router.put("/confirmations/:id", ConfirmationController.update);
router.delete("/confirmations/:id", ConfirmationController.delete);

export default router;
