const express = require('express');

const { InfoController } = require('../../controllers');
const userRoute = require('./user-routes');

const router = express.Router();

router.use('/signup',userRoute);

router.get('/info', InfoController.info)

module.exports =  router;