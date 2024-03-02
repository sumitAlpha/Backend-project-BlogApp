const Like = require("../models/LikeModel");
const Post = require("../models/PostModel");

exports.likePost = async (req, res) => {
    try {
        //data fetching
        const { user, post } = req.body;

        //save this like object into database
        const savedLike = await Like.create({
            user, post
        });

        //update kro post Model which has field "likes"
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { likes: savedLike._id } }, { new: true }).populate("likes").exec()
        res.status(200).json({
            success: true,
            data:updatedPost,
            message:"Liked A post Successfully",
        })
    } catch (error) {
        console.log(error);
        console.error(error);
        res.send(500).json({
            success: false,
            message:"Error while Liking A post"
        })
    }
}

//unliking a post
exports.unlikePost = async (req, res) => {
    try {
        //dataa fetch kro from req body
        const { post, like } = req.body;

        //find and delete 
        const deletedLike = await Like.findOneAndDelete(post, { _id: like });

        //update krdo post wale model me bhi
        const updatedPost = await Post.findByIdAndUpdate(post, { $pull: { likes: deletedLike._id } }, { new: true })
        res.status(200).json({
            success: true,
            message:"Deleted successfully",
        })

    } catch (error) {
        console.log(error);
        console.error(error);
        res.send(500).json({
            success: false,
            message:"Error while deleting  A like"
        })
    }
}