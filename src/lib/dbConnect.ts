import mongoose from "mongoose";


type ConnectionObject={
    //? means it's an optional value
    isConnected?:number
}
const connection:ConnectionObject={}

//a promise will be returned
async function dbConnect():Promise<void>{
    if(connection.isConnected)
    {
        console.log("Already connected to database")
        return
    }
    try{
        const db= await mongoose.connect(process.env.MONGODB_URI || "",{})

        connection.isConnected=db.connections[0].readyState

        console.log("db connected successfully")
    }catch(error)
    {
        console.log("DB connection failed",error)
        process.exit(1)

    }

}

export default dbConnect;
