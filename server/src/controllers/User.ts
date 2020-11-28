import { Request, Response } from "express";

import UserModel from "../models/User";

export default {
    async create(request: Request, response: Response) {
        try {
            const { body } = request;
            const { email } = body.account;

            if (await UserModel.findOne({ "account.email": email }).exec()) {
                return response.status(400).json({
                    ok: false,
                    message: "An error ocurred!",
                    error: "E-mail address is already taken",
                });
            }

            const user = {
                name: body.name,
                account: body.account,
                proof_of_life: body.proof_of_life,
                emergency: body.emergency,
                posthumous: body.posthumous,
                current_monitoring: body.current_monitoring,
            };

            const newUser = await UserModel.create(user);

            newUser.account.password = undefined;

            return response.json({
                ok: true,
                message: "User created successfully",
                newUser,
            });
        } catch (error) {
            return response.status(400).json({
                ok: false,
                message: "An error occurred",
                error,
            });
        }
    },
    async list(request: Request, response: Response) {
        try {
            const users = await UserModel.find().select("-account.password");

            return response.json({
                ok: true,
                message: "List of users fetched successfully",
                users,
            });
        } catch (error) {
            return response.status(400).json({
                ok: false,
                message: "An error occurred",
                error,
            });
        }
    },
    async find(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const user = await UserModel.findById(id).select(
                "-account.password"
            );

            return response.json({
                ok: true,
                message: "User data fetched successfully",
                user,
            });
        } catch (error) {
            return response.status(400).json({
                ok: false,
                message: "An error occurred",
                error,
            });
        }
    },
    async update(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const user = request.body;

            let updatedUser;

            if (await UserModel.findById(id)) {
                updatedUser = await UserModel.findByIdAndUpdate(id, user, {
                    new: true,
                });
            } else {
                throw new Error("There is no user with the specified id");
            }

            return response.status(200).json({
                ok: true,
                message: "User data updated successfully",
                updatedUser,
            });
        } catch (error) {
            return response.status(400).json({
                ok: false,
                message: "An error occurred",
                error,
            });
        }
    },
    async delete(request: Request, response: Response) {
        try {
            const { id } = request.params;

            if (!(await UserModel.exists({ _id: id }))) {
                throw new Error("Couldn't find user");
            }

            const deletedUser = await UserModel.findByIdAndRemove(id);

            return response.json({
                ok: true,
                message: "User deleted successfully",
                deletedUser,
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
