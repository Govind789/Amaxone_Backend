const express = require('express');
const userController = require('../controllers/usersController.js');

const userRouter = express.Router();

userRouter
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);

userRouter
    .route('/:id')
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = userRouter;