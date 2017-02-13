import express from 'express';

// Controller imports
import basicController from './controllers/basicController';
import userController from './controllers/userController';
import postController from './controllers/postController';
import commentController from './controllers/commentController';

const routes = express();

// Basic routes
routes.get('/', basicController.get);

// User routes
routes.post('/signup', userController.post);
routes.get('/signup', userController.get);

// Post routes
routes.post('/post', postController.post); // create post
routes.get('/posts', postController.getAll); // get/list posts

// Comment routes
routes.post('/comment', commentController.post); // comment on an existing post

export default routes;

console.log('Executing Server: routes.js ...');
