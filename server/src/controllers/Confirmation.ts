import { Request, Response } from "express";
import { ConfirmationModel } from "../models/Confirmation";

export default {
    async create(request: Request, response: Response) {
        try {
            const confirmation = request.body;

            const newConfirmation = await ConfirmationModel.create(
                confirmation
            );

            return response.status(201).json({
                ok: true,
                message: "Confirmation created successfully",
                newConfirmation,
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
            const confirmations = await ConfirmationModel.find();

            return response.status(200).json({
                ok: true,
                message: "List of confirmations fetched successfully",
                confirmations,
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

            if (!(await ConfirmationModel.findById(id))) {
                throw new Error("Couldn't find confirmation");
            }
            const confirmation = await ConfirmationModel.findById(id);

            return response.status(200).json({
                ok: true,
                message: "Confirmation data fetched successfully",
                confirmation,
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

            if (!(await ConfirmationModel.findById(id))) {
                throw new Error("Couldn't find confirmation");
            }

            const updatedConfirmation = await ConfirmationModel.findByIdAndUpdate(
                id,
                newData,
                { new: true }
            );

            return response.status(200).json({
                ok: true,
                message: "Confirmation data updated successfully!",
                updatedConfirmation,
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

            if (!(await ConfirmationModel.findById(id))) {
                throw new Error("Couldn't find confirmation");
            }

            const deletedConfirmation = await ConfirmationModel.findByIdAndDelete(
                id
            );

            return response.status(200).json({
                ok: true,
                message: "Confirmation deleted successfully!",
                deletedConfirmation,
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
