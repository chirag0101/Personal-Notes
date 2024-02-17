//DB connection file

import mongoose from "mongoose";

const connection = async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology: true,
            useNewurlParser: true
        }); 

        console.log(`Connection successful ${conn.connection.host}`)
    }catch(error){
        console.log(`Error ${error}`);
    }
}

export default  connection;