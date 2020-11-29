import express from "express";
import UserController from "./controllers/User";
import EventController from "./controllers/Event";
import CategoryController from "./controllers/Category";
import ContactController from "./controllers/Contact";
import NoteController from "./controllers/Note";
import ConfirmationController from "./controllers/Confirmation";
import MonitoringController from "./controllers/Monitoring";
import ChatController from "./controllers/Chat";
import ParticipationController from "./controllers/Participation";

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

router.post("/notes", NoteController.create);
router.get("/notes", NoteController.list);
router.get("/notes/:id", NoteController.find);
router.put("/notes/:id", NoteController.update);
router.delete("/notes/:id", NoteController.delete);

router.post("/confirmations", ConfirmationController.create);
router.get("/confirmations", ConfirmationController.list);
router.get("/confirmations/:id", ConfirmationController.find);
router.put("/confirmations/:id", ConfirmationController.update);
router.delete("/confirmations/:id", ConfirmationController.delete);

router.post("/monitorings", MonitoringController.create);
router.get("/monitorings", MonitoringController.list);
router.get("/monitorings/:id", MonitoringController.find);
router.put("/monitorings/:id", MonitoringController.update);
router.delete("/monitorings/:id", MonitoringController.delete);

router.post("/chats", ChatController.create);
router.get("/chats", ChatController.list);
router.get("/chats/:id", ChatController.find);
router.put("/chats/:id", ChatController.update);
router.delete("/chats/:id", ChatController.delete);

router.post("/participations", ParticipationController.create);
router.get("/participations", ParticipationController.list);
router.get("/participations/:id", ParticipationController.find);
router.put("/participations/:id", ParticipationController.update);
router.delete("/participations/:id", ParticipationController.delete);

export default router;
