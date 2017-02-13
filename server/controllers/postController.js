import db from './../models'

const postController = {};
// Empty object

postController.post = (req, res) => {
  const {
    title,
    text,
    link,
    userId,
  } = req.body;

  const post = new db.Post({
    title,
    text,
    link,
    _creator: userId,
  });

  post.save().then((newPost) => {
    return res.status(200).json({
      success: true,
      data: newPost,
    });
  }).catch((err) => {
    return res.status(500).json({
      message: err
    });
  });
  console.log('API post "post" request');
};

// Validation either text or link not both.

postController.getAll = (req, res) => {
  db.Post.find({}).populate({
    path: '_creator',
    select: 'username createdAt -_id'
   }).populate({
    path: '_comments',
    select: 'text createdAt _creator',
    match: { isDeleted: false }
   }).then((posts) => {
    return res.status(200).json({
      success: true,
      data: posts
    });
  }).catch((err) => {
    return res.status(500).json({
      message: err
    });
  });
  console.log('API post "Get all posts" request');
};

export default postController;

console.log('Executing Controller: postController.js ...');
