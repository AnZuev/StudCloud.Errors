'use strict';
let WsError = require('./errorTypes/wsError');
let HttpError = require('./errorTypes/HttpError');
let DbError = require('./errorTypes/DbError');
let AuthError = require('./errorTypes/AuthError');


let err = new HttpError(500, "Привет");
let err2 = new WsError(300, 'Привет');
let err3 = new AuthError(500, "la");


console.log(err2.get());


