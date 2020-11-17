import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Alou");
});

app.listen(8080);
