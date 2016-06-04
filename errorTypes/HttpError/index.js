'use strict';

let Error = require('../basicError'),
	Http = require('http'),
	Util = require('util');


function HttpError(status, message, code){
	Error.apply(this, arguments);
	Error.captureStackTrace(this, HttpError);

	this.status = status;
	this.code = code;
	this.message = message || Http.STATUS_CODES[status] || "Error";

}

Util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';

module.exports = HttpError;
