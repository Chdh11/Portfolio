import mongoose from "mongoose";

// Extend the global object to include mongoose
interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

declare global {
    // eslint-disable-next-line no-var
    var mongoose: MongooseCache | undefined;
}

global.mongoose = global.mongoose || {
    conn: null,
    promise: null
};

export default async function dbConnect(){
    if(global.mongoose && global.mongoose.conn){
        console.log("connection from previous");
        return global.mongoose.conn;
    } else{
        const conString=process.env.MONGODB_URI;
        const promise=mongoose.connect(conString || "",{autoIndex:true});
        
        global.mongoose={
            conn: await promise,
            promise
        };
        console.log("Newly connected");
        return await promise;
    }
}


// type ConnectionObject={
//     //? means it's an optional value
//     isConnected?:number
// }
// const connection:ConnectionObject={}

// //a promise will be returned
// async function dbConnect():Promise<void>{
//     if(connection.isConnected)
//     {
//         console.log("Already connected to database")
//         return
//     }
//     try{
//         const db= await mongoose.connect(process.env.MONGODB_URI || "",{ autoIndex:true})

//         connection.isConnected=db.connections[0].readyState

//         console.log("db connected successfully")
//     }catch(error)
//     {
//         console.log("DB connection failed",error)
//         process.exit(1)

//     }

// }

// export default dbConnect;


