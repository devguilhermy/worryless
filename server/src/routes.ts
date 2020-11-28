import express from "express";
import UserController from "./controllers/User";
import EventController from "./controllers/Event";

const router = express.Router();

router.post("/users", UserController.create);
router.get("/users", UserController.list);
router.get("/users/:id", UserController.find);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);

router.post("/event", EventController.create);
router.get("/event", EventController.list);
router.get("/event/:id", EventController.find);
router.put("/event/:id", EventController.update);
router.delete("/event/:id", EventController.delete);

export default router;
