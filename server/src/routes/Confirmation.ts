import express from "express";
import ConfirmationController from "../controllers/Confirmation";
const router = express.Router();

router.post("/", ConfirmationController.create);
router.get("/", ConfirmationController.list);
router.get("/:id", ConfirmationController.find);
router.put("/:id", ConfirmationController.update);
router.delete("/:id", ConfirmationController.delete);

export default router;
