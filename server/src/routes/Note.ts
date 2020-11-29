import express from "express";
import NoteController from "../controllers/Note";
const router = express.Router();

router.post("/notes", NoteController.create);
router.get("/notes", NoteController.list);
router.get("/notes/:id", NoteController.find);
router.put("/notes/:id", NoteController.update);
router.delete("/notes/:id", NoteController.delete);

export default router;
