import db from './../models'
// Could be import db from './../models/index' but index.js is the default JS file i a folder

const commentController = {};
// Empty object

// Post = Create
commentController.post = (req, res) => {
  const {
    text,
    userId,
    postId,
  } = req.body;

  console.log('API post "comment" request');

  // Validation of input is missing ...

  const comment = new db.Comment({
    text,
    _creator: userId,
    _post: postId,
  });

// 200 OK
// 500 Internal Server Error
// Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
  comment.save().then((newComment) => {
    db.Post.findByIdAndUpdate(
      postId,
      { $push: { '_comments': newComment._id } }
    ).then((existingPost) => {
      res.status(200).json({
        success: true,
        data: newComment,
        existingPost,
      });
    }).catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
  }).catch((err) => {
    res.status(500).json({
      message: err, // message: err.toString(),
    });
  });
  console.log('API comment saved');
};

export default commentController;

console.log('Executing Controller: commentController.js ...');
