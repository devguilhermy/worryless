import { Request, Response } from "express";
import { ParticipationModel } from "../models/Participation";

export default {
    async create(request: Request, response: Response) {
        try {
            const participation = request.body;

            const newParticipation = await ParticipationModel.create(
                participation
            );

            return response.status(201).json({
                ok: true,
                message: "Participation created successfully",
                newParticipation,
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
            const participationList = await ParticipationModel.find();

            return response.status(200).json({
                ok: true,
                message: "List of participation fetched successfully",
                participationList,
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

            if (!(await ParticipationModel.findById(id))) {
                throw new Error("Couldn't find participation");
            }
            const participationData = await ParticipationModel.findById(id);

            return response.status(200).json({
                ok: true,
                message: "Participation data fetched successfully",
                participationData,
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

            if (!(await ParticipationModel.findById(id))) {
                throw new Error("Couldn't find participation");
            }

            const updatedParticipation = await ParticipationModel.findByIdAndUpdate(
                id,
                newData,
                { new: true }
            );

            return response.status(200).json({
                ok: true,
                message: "Participation data updated successfully!",
                updatedParticipation,
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

            if (!(await ParticipationModel.findById(id))) {
                throw new Error("Couldn't find participation");
            }

            const deletedParticipation = await ParticipationModel.findByIdAndDelete(
                id
            );

            return response.status(200).json({
                ok: true,
                message: "Participation deleted successfully!",
                deletedParticipation,
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
