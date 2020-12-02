import { ConnectionOptions } from "typeorm";
import path from "path";

const isCompiled = path.extname(__filename).includes("js");

export default {
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "worryless",
    synchronize: !process.env.DB_NO_SYNC,
    logging: !process.env.DB_NO_LOGS,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 2000,
    entities: [`src/entities/**/*.${isCompiled ? "js" : "ts"}`],
    migrations: [`src/migrations/**/*.${isCompiled ? "js" : "ts"}`],
    cli: {
        entitiesDir: "src/entities",
        migrationsDir: "src/migrations",
    },
} as ConnectionOptions;
