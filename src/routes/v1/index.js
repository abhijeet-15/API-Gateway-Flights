const express = require('express');

const { InfoController } = require('../../controllers');
const { AuthRequestMiddleware } = require('../../middlewares')
const userRoute = require('./user-routes');

const router = express.Router();

router.use('/user',userRoute);

router.get('/info',AuthRequestMiddleware.checkAuth, InfoController.info)

module.exports =  router;