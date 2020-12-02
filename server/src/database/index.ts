import "reflect-metadata";
import { createConnection } from "typeorm";
// import { Category } from "../entities/Category";
// import { Chat } from "../entities/Chat";
// import { Confirmation } from "../entities/Confirmation";
// import { Contact } from "../entities/Contact";
// import { Event } from "../entities/Event";
// import { Message } from "../entities/Message";
// import { Monitoring } from "../entities/Monitoring";
// import { Note } from "../entities/Note";
// import { Participation } from "../entities/Participation";
// import { User } from "../entities/User";

createConnection({
    type: "postgres",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "test",
    entities: [__dirname + "/entity/*.js"],
    synchronize: true,
    logging: false,
})
    .then((connection) => {
        // here you can start to work with your entities
    })
    .catch((error) => console.log(error));
