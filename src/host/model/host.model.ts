import * as mongoose from 'mongoose';

export const HostSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        default: null,
    },
    contactInfo: {
        type: [{
            name: String,
            description: String,
            type: String,
        }],
        required: false,
        default: null,
    },
    userName: {
        type: String,
        required: true,
        default: null,
    },
});
