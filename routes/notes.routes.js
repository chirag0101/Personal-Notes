import express from "express";
import { fetchAllNodes,createNote, updateNote, deleteNote } from "../services/note.service.js";

const router=express.Router();

//fetching all notes from DB
router.get('/',fetchAllNodes);

//create new note & saving it to the database
router.post('/create',createNote);

//update notes & saving it to the database
router.put('/update/:id',updateNote)

//deleting note & saving  it to the database
router.delete('/delete/:id',deleteNote)

export {router as noteRouter};