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
            return response
                .status(400)
                .json({ ok: false, message: "An error occurred", error });
        }
    },

    async list(request: Request, response: Response) {},

    async find(request: Request, response: Response) {},

    async update(request: Request, response: Response) {},

    async delete(request: Request, response: Response) {},
};
