import { Notes } from "../models/notes.schema.js"

const fetchAllNodes=(req,res)=>{
    Notes.find({}).then((data)=>{
        res.send(data);
    }).catch();
}

// fetchAllNodes();

const createNote=(req,res)=>{
    const newNote=new Notes(res.body);
    newNote
    .save()
    .then(()=>{
        res.send("note created");
    })
    .catch();
}

const updateNote=(req,res)=>{
    const  id = req.params.id; 
    Notes.findByIdAndUpdate(id,req.body)
    .then(()=>{
        res.send("note updated");
    })
    .catch();
}

export { fetchAllNodes, createNote, updateNote}