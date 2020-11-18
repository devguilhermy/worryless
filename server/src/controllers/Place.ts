import { Request, Response } from "express";

import UserModel from "../models/User";

export default {
    async create(request: Request, response: Response) {
        try {
            const event = request.body;
            const { email } = event.account;

            if (await UserModel.findOne({ email })) {
                return response
                    .status(400)
                    .json({ message: "E-mail address is already taken" });
            }
            const user = await UserModel.create(event);

            user.account.password = undefined;

            return response.json({ user });
        } catch (error) {
            return response.json({ error });
        }
    },
    async list(request: Request, response: Response) {
        try {
            const users = await UserModel.find();

            return response.json({ users });
        } catch (error) {
            return response.json({ error });
        }
    },
    async find(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const user = await UserModel.findById(id);

            return response.json({ user });
        } catch (error) {
            return response.json({ error });
        }
    },
};
