import express from "express";
import { noteRouter } from "./routes/notes.routes.js";
import dotenv from "dotenv"
import db from "./config/db.js"

const port=5000;

const app=express();

app.get("/",(req,res)=>{
    res.send({data:"chirag"});
});

dotenv.config();

app.use("/notes",noteRouter)

app.listen(port,()=>{
    console.log(`Listening... ${port}`);
});

db();