import { Document } from 'mongoose';

export interface Admin extends Document {
    fullName:String;
    userName: String;
}
