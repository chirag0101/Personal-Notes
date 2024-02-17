import express from "express";
import { fetchAllNodes } from "../services/note.service.js";

const router=express.Router();

//fetching all notes from DB
router.get('/',fetchAllNodes);

//create new note & saving it to the database
router.post('/create',(req,res)=>{
    res.send("Note Created");
})

//update notes & saving it to the database
router.put('/update',(req,res)=>{
    res.send("Note Updated");
})

//deleting note & saving  it to the database
router.delete('/delete',(req,res)=>{
    res.send("Note Deleted");
})

export {router as noteRouter};