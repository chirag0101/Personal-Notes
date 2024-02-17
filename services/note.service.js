import { Notes } from "../models/notes.schema.js"

const fetchAllNodes=(req,res)=>{
    Notes.find({}).then((data)=>{
        res.send(data);
    }).catch();
}

// fetchAllNodes();

const createNode=(title,description)=>{
    const newNote=new Notes({title,description});
    newNote.save()
    .then(()=>{
        console.log("Note Created");
    })
    .catch();
}

export { fetchAllNodes, createNode}