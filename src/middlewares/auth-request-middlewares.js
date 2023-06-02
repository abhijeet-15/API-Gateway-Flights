const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

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

module.exports =  {
    validateAuthRequest
}