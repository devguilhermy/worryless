import { Request, Response } from "express";
import { MonitoringModel } from "../models/Monitoring";

export default {
    async create(request: Request, response: Response) {
        try {
            const monitoring = request.body;

            const newMonitoring = await MonitoringModel.create(monitoring);

            return response.status(201).json({
                ok: true,
                message: "Monitoring created successfully",
                newMonitoring,
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
            const monitorings = await MonitoringModel.find();

            return response.status(200).json({
                ok: true,
                message: "List of monitorings fetched successfully",
                monitorings,
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

            if (!(await MonitoringModel.findById(id))) {
                throw new Error("Couldn't find monitoring");
            }
            const monitoring = await MonitoringModel.findById(id);

            return response.status(200).json({
                ok: true,
                message: "Monitoring data fetched successfully",
                monitoring,
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

            if (!(await MonitoringModel.findById(id))) {
                throw new Error("Couldn't find monitoring");
            }

            const updatedMonitoring = await MonitoringModel.findByIdAndUpdate(
                id,
                newData,
                { new: true }
            );

            return response.status(200).json({
                ok: true,
                message: "Monitoring data updated successfully!",
                updatedMonitoring,
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

            if (!(await MonitoringModel.findById(id))) {
                throw new Error("Couldn't find monitoring");
            }

            const deletedMonitoring = await MonitoringModel.findByIdAndDelete(
                id
            );

            return response.status(200).json({
                ok: true,
                message: "Monitoring deleted successfully!",
                deletedMonitoring,
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
