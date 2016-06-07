'use strict';

let Error = require('../basicError'),
	Util = require('util');



function ValidationError(code, message){
	Error.apply(this, arguments);
	Error.captureStackTrace(this, ValidationError);

	this.message = message;
	this.code = code || 0;

}

Util.inherits(ValidationError, Error);
ValidationError.prototype.name = 'ValidationError';

module.exports = ValidationError;

