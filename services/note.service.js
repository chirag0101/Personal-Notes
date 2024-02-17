import { Notes } from "../models/notes.schema.js";

const responseModifier=(status,message,data)=>{
    return ({
        status,
        message,
        data
    })
}

const fetchAllNodes=(req,res)=>{
    Notes.find({}).then((data)=>{
        res.send(responseModifier(true,"message fetched successfully!",data));
    }).catch();
}

// fetchAllNodes();

const createNote=(req,res)=>{
    const newNote=new Notes(res.body);
    newNote
    .save()
    .then(()=>{
        res.send(responseModifier(true,"message created successfully!",null));
    })
    .catch();
}

const updateNote=(req,res)=>{
    const  id = req.params.id; 
    Notes.findByIdAndUpdate(id,req.body)
    .then(()=>{
        res.send(responseModifier(true,"message updated successfully!",null));
    })
    .catch();
}

const deleteNote=(req,res)=>{
    const id = req.params.id;
    Notes.findByIdAndDelete(id,req.body)
    .then(()=>{
        res.send(responseModifier(true,"message deleted successfully!",null));
    })
    .catch();
};

export { fetchAllNodes, createNote, updateNote, deleteNote}