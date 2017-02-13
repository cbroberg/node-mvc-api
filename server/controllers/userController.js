import db from './../models'
// Could be import db from './../models/index' but index.js is the default JS file i a folder

const userController = {};
// Empty object

// Post = Create
userController.post = (req, res) => {
  const { username, password } = req.body;
  console.log('API user "post" request');

  // Validation of input is missing ...

  const user = new db.User({
    username,
    password,
  });

// The then() method returns a promise. A promise represents the eventual result of an asynchronous operation.
// It is a placeholder into which the successful result value or reason for failure will materialize.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

  user.save().then((newUser) => {
    res.status(200).json({
      success: true,
      data: newUser,
    });
  }).catch((err) => {
    res.status(500).json({
      message: err,
    });
    console.log('Error 500!!!');
  });
  // console.log('API user created');
};

userController.get = (req, res) => {
  res.json({
    message: 'Sign up to our service! ... will be toggled by a view module later ... '
  });
  console.log('API signup accessed');
};

export default userController;

console.log('Executing Controller: userController.js ...');
