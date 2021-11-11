import { Document } from 'mongoose';
import { Facility } from './facility.class';

export interface House extends Document {
    description: String;
    houseHost: String[];
    address: String;
    ubication: String;
    facilities: [Facility];
    check_in: String;
    check_out: String;
    house_rules: String;
}