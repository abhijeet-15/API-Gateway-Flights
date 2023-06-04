const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
const { UserService } = require('../services');


function validateAuthRequest(req, res, next) {

    const missingFields = [];
    
    if(!req.body.email) {
        missingFields.push('email');
    }

    if(!req.body.password) {
        missingFields.push('password');
    }

    if(missingFields?.length > 0) {
        ErrorResponse.message = 'Something went wrong while authenticating the user';
        ErrorResponse.error = new AppError([` ${missingFields.toString()} not found in the incoming request in the correct form`], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    
    next();
}

async function checkAuth(req, res, next) {
    try {
        const response = await UserService.isAuthenticated(req.headers['x-access-token']);
        if(response) {
            req.user = response; //setting the user id in the request object
            next();
        }
    } catch (error) {
        return res
                .status(error.statusCode)
                .json(error);
    }
}

async function isAdmin(req, res, next) {
    const response = await UserService.isAdmin(req.user);
    if(!response) {
        return res
                .status(StatusCodes.UNAUTHORIZED)
                .json({message: 'User not authorized for this action'});
    }
    next();
}

module.exports =  {
    validateAuthRequest,
    checkAuth,
    isAdmin
}