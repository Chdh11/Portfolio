import { NextResponse } from "next/server";
import Message from "@/models/messages";
import dbConnect from "@/lib/dbConnect";

export async function POST(request:Request){
    try{
        await dbConnect();
        // Reads and parses the incoming request body
        const body=await request.json();
        //Creates a new Message document (MongoDB model)
        const newMessage=new Message({
            email:body.email,
            message:body.message
        });
        //Saves the new message into the MongoDB collection.
        const savedMessage=await newMessage.save();
        return NextResponse.json({ success: true, data: savedMessage });

    }catch(err){
        console.error(err);
        return NextResponse.json({ success: false, error: "Failed to save message" }, { status: 500 });

    }
}