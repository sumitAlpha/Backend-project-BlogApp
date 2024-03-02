const Comment = require("../models/CommentModel");
const Post = require("../models/PostModel");

exports.createComment = async (req, res) => {
    try {
        //fetch data from from request body.
        const { post, user, body } = req.body;

        //make a new object of comments
        const comment = new Comment({
            post, body, user
        });

        //database interaction
        const savedComment = await comment.save();
         
        //update in the Post Model which has comment field needs to be updated as well
        const updatedPost = await Post.findByIdAndUpdate (post, { $push: { comments: savedComment._id } }, { new: true }).populate("comments").exec();
        return res.status(200).json({
            success: true,
            data: updatedPost,
            message:"Created Comment on Post Successfully"
        })
    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({
            success: false,
            message:"Error while Creating Comment"
        })
    }
}

// exports.createComments2 = async(req, res) => {
//     try {
//         const { user1, post1, body1 } = req.body;

//         //add new object to database 
//         const comment =  new Comment({
//             user1, title1, post1
//         });

//         const savedComment = await comment.save();
//         //update post model 
//         const updatedPost = await Post.findByIdAndUpdate(Post, { $push: { comments: savedComment._id } }, { new: true }).populate("comments").exec();

//         res.status(200).json({
//             success: true,
//             message: "Comment Created Successfully",
//             body:updatedPost,
//         })
        
//     } catch (error) {
//         console.log(error);
//         console.error(error);
//         res.status(400).json({
//             success: false,
//             message: "Internal Server Error",           
//         })
//     }
// }