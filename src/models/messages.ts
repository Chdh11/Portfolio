import mongoose, {Schema, Document, Model} from "mongoose";

interface IMessage extends Document{
    email:string,
    message:string,
}

const MessageSchema=new Schema<IMessage>({
    email:{type:String, required:true},
    message:{type:String, required:true}
})

const Message:Model<IMessage>= mongoose.models.Message || mongoose.model<IMessage>("Message",MessageSchema);

export default Message;