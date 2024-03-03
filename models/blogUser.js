import mongoose from "mongoose";


// create a blog user models here
const blogUser = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    is_admin: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        default: ""        
    },
});

export default mongoose.model('blogUser', blogUser);