import mongoose, {Schema,Document,Model} from "mongoose";
//Model: collection, Document: document, Schema: collection structure

//Ensures type safety for each project entry in your database.
//Extends Document so Mongoose knows it’s a MongoDB document.
interface IProject extends Document{
    domain:string,
    title:string,
    description:string,
    stack:string[],
    video_url:string,
    image_url:string,
    url:string,
    github_repo:string,
    article:string
}

const ProjectSchema = new Schema<IProject>({
    domain: {type: String, required:true},
    title: {type: String, required:true},
    description: {type: String, required:true},
    stack: {type: [String], required:true},
    video_url: {type: String, required:true},
    image_url: {type: String, required:true},
    url: {type: String, required:false},
    github_repo: {type: String, required:true},
    article: {type: String, required:false},
})

//Checks if a Project model is already registered (because Next.js hot reload can cause duplicates).

const Project:Model<IProject>=mongoose.models.Project || mongoose.model<IProject>("Project",ProjectSchema,'projects');

export default Project;