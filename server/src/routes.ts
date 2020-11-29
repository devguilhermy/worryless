import express from "express";
import CategoryRoutes from "./routes/Category";
import ChatRoutes from "./routes/Chat";
import ConfirmationRoutes from "./routes/Confirmation";
import ContactRoutes from "./routes/Contact";
import EventRoutes from "./routes/Event";
import MessageRoutes from "./routes/Message";
import MonitoringRoutes from "./routes/Monitoring";
import NoteRoutes from "./routes/Note";
import ParticipationRoutes from "./routes/Participation";
import UserRoutes from "./routes/User";

const router = express.Router();

router.use("/categories", CategoryRoutes);
router.use("/chats", ChatRoutes);
router.use("/confirmations", ConfirmationRoutes);
router.use("/contacts", ContactRoutes);
router.use("/events", EventRoutes);
router.use("/messages", MessageRoutes);
router.use("/monitoring", MonitoringRoutes);
router.use("/notes", NoteRoutes);
router.use("/participation", ParticipationRoutes);
router.use("/users", UserRoutes);

export default router;
