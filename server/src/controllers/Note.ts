import { Request, Response } from "express";
import { NoteModel } from "../models/Note";

export default {
    async create(request: Request, response: Response) {
        try {
            const note = request.body;

            const newNote = await NoteModel.create(note);

            return response.status(201).json({
                ok: true,
                message: "Note created successfully",
                newNote,
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
            const notes = await NoteModel.find();

            return response.status(200).json({
                ok: true,
                message: "List of notes fetched successfully",
                notes,
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

            if (!(await NoteModel.findById(id))) {
                throw new Error("Couldn't find note");
            }
            const note = await NoteModel.findById(id);

            return response.status(200).json({
                ok: true,
                message: "Note data fetched successfully",
                note,
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

            if (!(await NoteModel.findById(id))) {
                throw new Error("Couldn't find note");
            }

            const updatedNote = await NoteModel.findByIdAndUpdate(id, newData, {
                new: true,
            });

            return response.status(200).json({
                ok: true,
                message: "Note data updated successfully!",
                updatedNote,
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

            if (!(await NoteModel.findById(id))) {
                throw new Error("Couldn't find note");
            }

            const deletedNote = await NoteModel.findByIdAndDelete(id);

            return response.status(200).json({
                ok: true,
                message: "Note deleted successfully!",
                deletedNote,
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
