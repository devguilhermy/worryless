import { Request, Response } from "express";
import { CategoryModel } from "../models/Category";

export default {
    async create(request: Request, response: Response) {
        try {
            const category = request.body;

            const newCategory = await CategoryModel.create(category);

            return response.status(201).json({
                ok: true,
                message: "Category created successfully",
                newCategory,
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
            const categorys = await CategoryModel.find();

            return response.status(200).json({
                ok: true,
                message: "List of categorys fetched successfully",
                categorys,
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

            if (!(await CategoryModel.findById(id))) {
                throw new Error("Couldn't find category");
            }
            const category = await CategoryModel.findById(id);

            return response.status(200).json({
                ok: true,
                message: "Category data fetched successfully",
                category,
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

            if (!(await CategoryModel.findById(id))) {
                throw new Error("Couldn't find category");
            }

            const updatedCategory = await CategoryModel.findByIdAndUpdate(
                id,
                newData,
                { new: true }
            );

            return response.status(200).json({
                ok: true,
                message: "Category data updated successfully!",
                updatedCategory,
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

            if (!(await CategoryModel.findById(id))) {
                throw new Error("Couldn't find category");
            }

            const deletedCategory = await CategoryModel.findByIdAndDelete(id);

            return response.status(200).json({
                ok: true,
                message: "Category deleted successfully!",
                deletedCategory,
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
