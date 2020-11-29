import express from "express";
import NoteController from "../controllers/Note";
const router = express.Router();

router.post("/", NoteController.create);
router.get("/", NoteController.list);
router.get("/:id", NoteController.find);
router.put("/:id", NoteController.update);
router.delete("/:id", NoteController.delete);

export default router;
