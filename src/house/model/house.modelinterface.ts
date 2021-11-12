import { Document } from 'mongoose';
import { Facility } from './facility.class';
import { Image } from './image.class';

export interface House extends Document {
    description: String;
    houseHost: String[];
    address: String;
    ubication: String;
    facilities: [Facility];    
    images: [Image];
    check_in: String;
    check_out: String;
    house_rules: String;
}