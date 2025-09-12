import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/projects";

export async function GET(req: Request) {
    try{
        //Step1:db connect
        await dbConnect();

        // Step 2: parse query params (page, limit)
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page") || "1", 10);
        const limit = parseInt(searchParams.get("limit") || "10", 10);

        //Step3: fetch
        const projects=await Project.find()
        .sort({ order: -1})
        .skip((page - 1) * limit)
        .limit(limit)
        .lean();

        // Step 4: total count for frontend pagination UI
        const totalCount = await Project.countDocuments();

        //Step5: return JSON response
        return NextResponse.json({
            success: true,
            data: projects,
            pagination: {
                page,
                limit,
                totalPages: Math.ceil(totalCount / limit),
                totalItems: totalCount,
            },
        });

    }catch(error){
        console.log("Error fetching data: ", error);
        return NextResponse.json({success:false, error:"Failed Fetching Projects",},{status:500});

    }
}