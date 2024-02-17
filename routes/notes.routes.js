import express from "express";

const router=express.Router();

//fetching all notes from DB
router.get('/',(req,res)=>{
    res.send('Hello World!');
});

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