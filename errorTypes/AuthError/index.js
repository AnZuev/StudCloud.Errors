'use strict';

let Error = require('../basicError'),
	Util = require('util');



function AuthError(code, message){
	Error.apply(this, arguments);
	Error.captureStackTrace(this, AuthError);

	this.message = message;
	this.code = code || 0;

}

Util.inherits(AuthError, Error);
AuthError.prototype.name = 'AuthError';

module.exports = AuthError;

