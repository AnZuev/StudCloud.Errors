Error.prototype.get = function(){
	return {exception: true, message: this.message, code: this.code || 500}
};

module.exports = Error;
