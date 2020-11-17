import express from "express";
import PlacesController from "./controllers/Place";

const router = express.Router();

router.post("/events", PlacesController.create);

export default router;
