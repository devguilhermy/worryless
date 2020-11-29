import { Request, Response } from "express";
import { ParticipantModel } from "../models/Participant";

export default {
    async create(request: Request, response: Response) {
        try {
            const participant = request.body;

            const newParticipant = await ParticipantModel.create(participant);

            return response.status(201).json({
                ok: true,
                message: "Participant created successfully",
                newParticipant,
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
            const participants = await ParticipantModel.find();

            return response.status(200).json({
                ok: true,
                message: "List of participants fetched successfully",
                participants,
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

            if (!(await ParticipantModel.findById(id))) {
                throw new Error("Couldn't find participant");
            }
            const participantData = await ParticipantModel.findById(id);

            return response.status(200).json({
                ok: true,
                message: "Participant data fetched successfully",
                participantData,
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

            if (!(await ParticipantModel.findById(id))) {
                throw new Error("Couldn't find participant");
            }

            const updatedParticipant = await ParticipantModel.findByIdAndUpdate(
                id,
                newData,
                { new: true }
            );

            return response.status(200).json({
                ok: true,
                message: "Participant data updated successfully!",
                updatedParticipant,
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

            if (!(await ParticipantModel.findById(id))) {
                throw new Error("Couldn't find participant");
            }

            const deletedParticipant = await ParticipantModel.findByIdAndDelete(
                id
            );

            return response.status(200).json({
                ok: true,
                message: "Participant deleted successfully!",
                deletedParticipant,
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
