import { Document } from 'mongoose';
import { ContactInfo } from './contactInfo.class';

export interface Host extends Document {
    fullName:String;
    contactInfo: [ContactInfo];
    userName: String;
}
