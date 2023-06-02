const express = require('express');
const { UserController } = require('../../controllers')
const { AuthRequestMiddleware } = require('../../middlewares');

const router = express.Router();

router.post('/signup',AuthRequestMiddleware.validateAuthRequest, UserController.createUser);
router.post('/signin',AuthRequestMiddleware.validateAuthRequest, UserController.signIn);

module.exports = router;