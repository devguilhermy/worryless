import express from "express";
import PlacesController from "./controllers/Place";

const router = express.Router();

router.post("/users", PlacesController.create);
router.get("/users", PlacesController.list);
router.get("/users/:id", PlacesController.find);

export default router;
