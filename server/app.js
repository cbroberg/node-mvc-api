import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import bodyParser from 'body-parser';

// mongoose.Promise = require('q').Promise;

// mongoose.Promise = require('bluebird');

// mongoose.Promise = global.Promise; is native promises)

// To fix warning: (node:49577) DeprecationWarning: Mongoose: mpromise (mongoose's default promise library)
// is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html


var uri = 'mongodb://user:pass@ds151049.mlab.com:51049/odeum_api';
var options = {
  user: 'MyDBUser',
  pass: 'QaDeXvG'
}

mongoose.connect(uri, options, () => {
  console.log('Connected to MongoDB...');
  console.log('');
});

// mongoose.connect('mongodb://localhost:27017/odeum_api', () => {
//   console.log('Connected to MongoDB...');
//   console.log('');
// });

// const db = function connect(opts) {
//   mongoose.Promise = global.Promise;
//   mongoose.connect('mongodb://localhost:27017/odeum_api');
//   return mongoose.connection;
// };

// var uri = 'mongodb://localhost:27017/odeum_api';
// var options = { promiseLibrary: require('bluebird') };
//
// // var options = mongoose.Promise = require('bluebird');
//
// var db = mongoose.createConnection(uri, options);
//
// var Band = db.model('band-promises', { name: String });
//
//     db.on('open', function() {
//       assert.equal(Band.collection.findOne().constructor, require('bluebird'));
//       console.log('Connected to MongoDB...');
//     });

const app = express();

// Middelware
app.use(bodyParser.json());
app.use('/api', routes);

export default app;

console.log('Executing Server: app.js ...');
