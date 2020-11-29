import { Request, Response } from "express";
import { ContactModel } from "../models/Contact";

export default {
    async create(request: Request, response: Response) {
        try {
            const contact = request.body;

            const newContact = await ContactModel.create(contact);

            return response.status(201).json({
                ok: true,
                message: "Contact created successfully",
                newContact,
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
            const contactList = await ContactModel.find();

            return response.status(200).json({
                ok: true,
                message: "List of contacts fetched successfully",
                contactList,
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

            if (!(await ContactModel.findById(id))) {
                throw new Error("Couldn't find contact");
            }
            const contact = await ContactModel.findById(id);

            return response.status(200).json({
                ok: true,
                message: "Contact data fetched successfully",
                contact,
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

            if (!(await ContactModel.findById(id))) {
                throw new Error("Couldn't find contact");
            }

            const updatedContact = await ContactModel.findByIdAndUpdate(
                id,
                newData,
                { new: true }
            );

            return response.status(200).json({
                ok: true,
                message: "Contact data updated successfully!",
                updatedContact,
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

            if (!(await ContactModel.findById(id))) {
                throw new Error("Couldn't find contact");
            }

            const deletedContact = await ContactModel.findByIdAndDelete(id);

            return response.status(200).json({
                ok: true,
                message: "Contact deleted successfully!",
                deletedContact,
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
