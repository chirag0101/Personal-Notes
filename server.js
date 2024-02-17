import express from "express";
import { noteRouter } from "./routes/notes.routes.js";
import dotenv from "dotenv";
import db from "./config/db.js";
import bodyParser from "body-parser";

const port=5000;

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded())

app.get("/",(req,res)=>{
    res.send({data:"chirag"});
});

dotenv.config();

app.use("/notes",noteRouter)

app.listen(port,()=>{
    console.log(`Listening... ${port}`);
});

db();