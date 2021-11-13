import { Document } from 'mongoose';
import { ContactInfo } from './contactInfo.class';

export interface Host extends Document {
    contactInfo: [ContactInfo];
    systemUser: String;
}
