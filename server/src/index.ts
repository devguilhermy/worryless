import express from "express";
import router from "./routes";
import cors from "cors";
import { Server } from "typescript-rest";

import "./handlers";

export const app: express.Application = express();

app.use(cors());
app.use(express.json());
app.use(router);

Server.buildServices(app);

let port = parseInt(process.env.PORT || "");
if (isNaN(port) || port === 0) {
    port = 8080;
}

app.listen(port, "0.0.0.0", () => {
    console.log(`Server started on Port ${port}`);
});
