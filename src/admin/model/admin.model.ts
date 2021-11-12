import * as mongoose from 'mongoose';

export const AdminSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        default: null,
    },
    userName: {
        type: String,
        required: true,
        default: null,
    },
});
