import mongoose from "mongoose";


// init create blog settings models here
const blogSettingsData = mongoose.Schema({
    blog_title: {
        type: String,
        required: true
    },
    blog_descrition: {
        type: String,
        required: true
    },
    blog_photos: {
        type: String,
        required: true,
        default: "avada.png"
    }
});



// export default blog setting data here
export default mongoose.model('blogSettingsData', blogSettingsData);