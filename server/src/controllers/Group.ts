import { Request, Response } from "express";
import { GroupModel } from "../models/Group";

export default {
    async create(request: Request, response: Response) {
        try {
            const group = request.body;

            const newGroup = await GroupModel.create(group);

            return response.status(201).json({
                ok: true,
                message: "Group created successfully",
                newGroup,
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
            const groups = await GroupModel.find();

            return response.status(200).json({
                ok: true,
                message: "List of groups fetched successfully",
                groups,
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

            if (!(await GroupModel.findById(id))) {
                throw new Error("Couldn't find group");
            }
            const group = await GroupModel.findById(id);

            return response.status(200).json({
                ok: true,
                message: "Group data fetched successfully",
                group,
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

            if (!(await GroupModel.findById(id))) {
                throw new Error("Couldn't find group");
            }

            const updatedGroup = await GroupModel.findByIdAndUpdate(
                id,
                newData,
                { new: true }
            );

            return response.status(200).json({
                ok: true,
                message: "Group data updated successfully!",
                updatedGroup,
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

            if (!(await GroupModel.findById(id))) {
                throw new Error("Couldn't find group");
            }

            const deletedGroup = await GroupModel.findByIdAndDelete(id);

            return response.status(200).json({
                ok: true,
                message: "Group deleted successfully!",
                deletedGroup,
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
