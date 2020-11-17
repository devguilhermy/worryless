import { Request, Response } from "express";

export default {
    async create(request: Request, response: Response) {
        const event = request.body;

        return response.json({ event });
    },
};
