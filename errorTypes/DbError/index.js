'use strict';

let Error = require('../basicError'),
	Util = require('util');


function DbError(err, code, message){
	Error.apply(this, arguments);
	Error.captureStackTrace(this, DbError);
	this.code = code || 500;
	this.message = message || "Ошибка базы данных";
	this.err = err || null;
}

Util.inherits(DbError, Error);
DbError.prototype.name = 'DbError';

module.exports = DbError;
