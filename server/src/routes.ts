import express from "express";
import UserController from "./controllers/User";
import EventController from "./controllers/Event";
import CategoryController from "./controllers/Category";
import ContactController from "./controllers/Contact";

const router = express.Router();

router.post("/users", UserController.create);
router.get("/users", UserController.list);
router.get("/users/:id", UserController.find);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);

router.post("/events", EventController.create);
router.get("/events", EventController.list);
router.get("/events/:id", EventController.find);
router.put("/events/:id", EventController.update);
router.delete("/events/:id", EventController.delete);

router.post("/categories", CategoryController.create);
router.get("/categories", CategoryController.list);
router.get("/categories/:id", CategoryController.find);
router.put("/categories/:id", CategoryController.update);
router.delete("/categories/:id", CategoryController.delete);

router.post("/contacts", ContactController.create);
router.get("/contacts", ContactController.list);
router.get("/contacts/:id", ContactController.find);
router.put("/contacts/:id", ContactController.update);
router.delete("/contacts/:id", ContactController.delete);

export default router;
