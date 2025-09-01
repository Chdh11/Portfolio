import mongoose, {Schema, Document, Model} from "mongoose";

interface IBlog extends Document{
    order:number,
    title:string,
    description:string,
    url:string,
    image_url:string
}

const BlogSchema=new Schema<IBlog>({
    order:{type:Number,required:true},
    title:{type:String, required:true},
    description:{type:String, required:true},
    url:{type:String, required:true},
    image_url:{type:String, required:true}
})

const Blog:Model<IBlog>=mongoose.models.Blog || mongoose.model<IBlog>("Blog",BlogSchema);

export default Blog;