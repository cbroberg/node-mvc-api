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
