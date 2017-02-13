import mongoose from 'mongoose';

const { Schema } = mongoose;

// mongoose.Promise = global.Promise; Inserted the bluebird module here to fix warnings described in app.js
mongoose.Promise = require('bluebird');

const postSchema = new Schema({
  title: { type: String, required: true },
  link: String,
  text: String,
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  _creator: { type: Schema.ObjectId, ref: 'User' },
  _comments: [{ type: Schema.ObjectId, ref: 'Comment' }],
});

const Post = mongoose.model('Post', postSchema);

export default Post;

console.log('Executing Server: post.js ...');
