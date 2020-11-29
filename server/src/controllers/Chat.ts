import { Request, Response } from "express";
import { ChatModel } from "../models/Chat";

export default {
    async create(request: Request, response: Response) {
        try {
            const chat = request.body;

            const newChat = await ChatModel.create(chat);

            return response.status(201).json({
                ok: true,
                message: "Chat created successfully",
                newChat,
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
            const chats = await ChatModel.find();

            return response.status(200).json({
                ok: true,
                message: "List of chats fetched successfully",
                chats,
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

            if (!(await ChatModel.findById(id))) {
                throw new Error("Couldn't find chat");
            }
            const chat = await ChatModel.findById(id);

            return response.status(200).json({
                ok: true,
                message: "Chat data fetched successfully",
                chat,
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

            if (!(await ChatModel.findById(id))) {
                throw new Error("Couldn't find chat");
            }

            const updatedChat = await ChatModel.findByIdAndUpdate(id, newData, {
                new: true,
            });

            return response.status(200).json({
                ok: true,
                message: "Chat data updated successfully!",
                updatedChat,
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

            if (!(await ChatModel.findById(id))) {
                throw new Error("Couldn't find chat");
            }

            const deletedChat = await ChatModel.findByIdAndDelete(id);

            return response.status(200).json({
                ok: true,
                message: "Chat deleted successfully!",
                deletedChat,
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
