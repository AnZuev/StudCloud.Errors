'use strict';

let Error = require('../basicError'),
	Util = require('util');



function WsError(code, message){
	Error.apply(this, arguments);
	this.code = code || 500;
	this.message = message || "Ошибка при работе по ws";
	this.get = function(){
		return {
			code: this.code,
			description: this.message,
			exception: true
		}
	};

	this.sendError = this.get;
}

Util.inherits(WsError, Error);
WsError.prototype.name = 'WsError';

module.exports = WsError;

