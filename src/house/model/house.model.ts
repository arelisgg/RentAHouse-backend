import * as mongoose from 'mongoose';

export const HouseSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        default: null,
    },
    houseHost: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        default: null,
        ref: 'Host',
    },
    address: {
        type: String,
        required: false,
    },    
    ubication: {
        type: String,
        required: false,
    },
    facilities: {
        type: [{
            name: String,
        }],
        required: false,
    },
    images: {
        type: [{
            name: String,
            description: String,
        }],
        required: true,
        default: null,
    },
    check_in: {
        type: String,
        required: false,
    },
    check_out: {
        type: String,
        required: false,
    },
    house_rules: {
        type: String,
        required: false,
    },
});
