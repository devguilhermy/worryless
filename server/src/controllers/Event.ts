import { Request, Response } from "express";
import { EventModel } from "../models/Event";

export default {
    async create(request: Request, response: Response) {
        try {
            const event = request.body;

            const newEvent = await EventModel.create(event);

            return response.status(201).json({
                ok: true,
                message: "Event created successfully",
                newEvent,
            });
        } catch (error) {
            return response.status(400).json({
                ok: false,
                message: "An error occurred",
                error: error.message,
            });
        }
    },

    async list(request: Request, response: Response) {
        try {
            const events = await EventModel.find();

            return response.status(200).json({
                ok: true,
                message: "List of events fetched successfully",
                events,
            });
        } catch (error) {
            return response.status(400).json({
                ok: false,
                message: "An error occurred",
                error: error.message,
            });
        }
    },

    async find(request: Request, response: Response) {
        try {
            const { id } = request.params;

            if (!(await EventModel.findById(id))) {
                throw new Error("Couldn't find event");
            }
            const event = await EventModel.findById(id);

            return response.status(200).json({
                ok: true,
                message: "Event data fetched successfully",
                event,
            });
        } catch (error) {
            return response.status(400).json({
                ok: false,
                message: "An error occurred",
                error: error.message,
            });
        }
    },

    async update(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const newData = request.body;

            if (!(await EventModel.findById(id))) {
                throw new Error("Couldn't find event");
            }

            const updatedEvent = await EventModel.findByIdAndUpdate(
                id,
                newData,
                { new: true }
            );

            return response.status(200).json({
                ok: true,
                message: "Event data updated successfully!",
                updatedEvent,
            });
        } catch (error) {
            return response.status(400).json({
                ok: false,
                message: "An error occurred",
                error: error.message,
            });
        }
    },

    async delete(request: Request, response: Response) {
        try {
            const { id } = request.params;

            if (!(await EventModel.findById(id))) {
                throw new Error("Couldn't find event");
            }

            const deletedEvent = await EventModel.findByIdAndDelete(id);

            return response.status(200).json({
                ok: true,
                message: "Event deleted successfully!",
                deletedEvent,
            });
        } catch (error) {
            return response.status(400).json({
                ok: false,
                message: "An error occurred",
                error: error.message,
            });
        }
    },
};
