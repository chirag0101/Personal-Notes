import express from "express";
import { noteRouter } from "./routes/notes.routes.js";

const port=5000;

const app=express();

app.get("/",(req,res)=>{
    res.send({data:"chirag"});
});

app.use("/notes",noteRouter)

app.listen(port,()=>{
    console.log(`Listening... ${port}`);
});
