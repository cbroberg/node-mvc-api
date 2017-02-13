import mongoose from 'mongoose';

const { Schema } = mongoose;

// mongoose.Promise = global.Promise; Inserted the bluebird module here to fix warnings described in app.js
mongoose.Promise = require('bluebird');

const commentSchema = new Schema({
  text: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  _creator: { type: Schema.ObjectId, ref: 'User' },
  _post: { type: Schema.ObjectId, ref: 'Post'}
});

const autoPopulateCreator = function(next) {
  this.populate({
    path: '_creator',
    select: 'username createdAt -_id'
  });
  next();
};

commentSchema.pre('find', autoPopulateCreator);

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;

console.log('Executing Server: comment.js ...');
