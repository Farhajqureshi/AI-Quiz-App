import { content } from "flowbite-react/tailwind";
import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
    content: string;
    cretedAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true,
    },
    cretedAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

export interface User extends Document {
    username: string,
    email: string,
    password: string,
    verifyCode: string,
    verifyCodeExpiry: Date,
    isVarifyed: boolean,
    isAcceptingMsg: boolean,
    messages: Message[]

}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is Requred "],
        trim: true,
        unique: true,
        match: [/.+\@.+\..+/, "please is Requrired"]

    },
    password: {
        type: String,
        required: true
    },
    verifyCode: {
        type: String,
        required: true
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "Verify code is reqired"]
    },
    isVarifyed: {
        type: Boolean,
        default: false
    },
    isAcceptingMsg: {
        type: Boolean,
        required: true
    },
    messages: [MessageSchema]

})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User", UserSchema));

