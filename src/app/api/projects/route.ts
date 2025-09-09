import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/projects";

export async function GET() {
    try{
        //Step1:db connect
        await dbConnect();

        //Step2: fetch
        const projects=await Project.find().sort({ order: -1});

        //Step3: return JSON response
        return NextResponse.json({success:true, data:projects});

    }catch(error){
        console.log("Error fetching data: ", error);
        return NextResponse.json({success:false, error:"Failed Fetching Projects",},{status:500});

    }
}