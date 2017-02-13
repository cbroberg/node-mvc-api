const basicController = {};
// Empty object

basicController.get = (req, res) => {
  res.json({
    message: 'Welcome to our API!'
  });
  console.log('API root accessed');
};

export default basicController;

console.log('');
console.log('Executing Controller: basicController.js ...');
