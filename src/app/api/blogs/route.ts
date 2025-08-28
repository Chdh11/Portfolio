import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/blogs";

export async function GET(){
    try{
        await dbConnect();
        const blogs=await Blog.find();
        return NextResponse.json({success:true, data:blogs});
    }catch(error){
        console.log("Error fetching blogs:",error);
        return NextResponse.json({success:false, error:"Failed fetching blogs"},{status:500});
    }
}