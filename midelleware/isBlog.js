import blogSettings from "../models/blogSettingsModel.js";

const isblog = async (req, res, next) => {
    try{
        // count data 
        const blogSetting = await blogSettings.find({});
        
        if(blogSetting.length == 0 && req.originalUrl != "/blog-setup"){
            res.redirect('/blog-setup');
        }else{
            next();
        }

    }catch(error){
        console.log(error.message);
    }
}


export default isblog;