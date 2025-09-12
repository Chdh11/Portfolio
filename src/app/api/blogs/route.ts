import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/blogs";

export async function GET(req:Request){
    try{
        await dbConnect();

        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page") || "1", 10);
        const limit = parseInt(searchParams.get("limit") || "3", 10);

        const totalCount = await Blog.countDocuments();

        const blogs=await Blog.find()
        .sort({ order: -1})
        .skip((page - 1) * limit)
        .limit(limit)
        .lean();

        return NextResponse.json({
            success:true, 
            data:blogs,
            pagination: {
                page,
                limit,
                totalPages: Math.ceil(totalCount / limit),
                totalItems: totalCount,
            },

        });
    }catch(error){
        console.log("Error fetching blogs:",error);
        return NextResponse.json({success:false, error:"Failed fetching blogs"},{status:500});
    }
}