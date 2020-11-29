import { Request, Response } from "express";
import { MessageModel } from "../models/Message";

export default {
    async create(request: Request, response: Response) {
        try {
            const message = request.body;

            const newMessage = await MessageModel.create(message);

            return response.status(201).json({
                ok: true,
                message: "Message created successfully",
                newMessage,
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
            const messages = await MessageModel.find();

            return response.status(200).json({
                ok: true,
                message: "List of messages fetched successfully",
                messages,
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

            if (!(await MessageModel.findById(id))) {
                throw new Error("Couldn't find message");
            }
            const messageData = await MessageModel.findById(id);

            return response.status(200).json({
                ok: true,
                message: "Message data fetched successfully",
                messageData,
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

            if (!(await MessageModel.findById(id))) {
                throw new Error("Couldn't find message");
            }

            const updatedMessage = await MessageModel.findByIdAndUpdate(
                id,
                newData,
                { new: true }
            );

            return response.status(200).json({
                ok: true,
                message: "Message data updated successfully!",
                updatedMessage,
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

            if (!(await MessageModel.findById(id))) {
                throw new Error("Couldn't find message");
            }

            const deletedMessage = await MessageModel.findByIdAndDelete(id);

            return response.status(200).json({
                ok: true,
                message: "Message deleted successfully!",
                deletedMessage,
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
