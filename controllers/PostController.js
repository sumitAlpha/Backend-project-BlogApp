const Post = require("../models/PostModel")


exports.createPost = async (req, res) => {
    try {
        //data fetching form request body;
        const { title, body } = req.body;

        //make new object of post 
        const post = new Post({
            title, body
        });

        //add these object to database
        const savedPost = await post.save();

        //return response
        res.status(200).json({
            success: true,
            data: savedPost,
            message: "Post Created Successfully"
        });
    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(400).json({
            success: false,
            message:"Error while Creating Post"
        })
    }
}


//get All Posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('likes').populate("comments").exec();
        //return response
        res.status(200).json({
            success: true,
            data: posts,
            message: "All Posts Feteched Successfully"
        })
    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error while Fetching All Posts"
        })
    }
}