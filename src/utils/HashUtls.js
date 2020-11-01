"use strict";
exports.__esModule = true;
var bcrypt_1 = require("bcrypt");
var HashUtls = /** @class */ (function () {
    function HashUtls() {
    }
    HashUtls.createSalt = function () {
        return bcrypt_1.genSalt();
    };
    HashUtls.hashPassword = function (password, salt) {
        return bcrypt_1.hash((password + salt), process.env.PAPPER);
    };
    HashUtls.comparePassword = function (attempt, hash) {
        return bcrypt_1.compare(attempt, hash);
    };
    return HashUtls;
}());
exports["default"] = HashUtls;
console.log(bcrypt_1.genSalt().then(function (data) { return console.log(data); }));
console.log(bcrypt_1.genSalt().then(function (data) { return console.log(data); }));
console.log(bcrypt_1.genSalt().then(function (data) { return console.log(data); }));
console.log(bcrypt_1.genSalt().then(function (data) { return console.log(data); }));
console.log(bcrypt_1.genSalt().then(function (data) { return console.log(data); }));
console.log(bcrypt_1.genSalt().then(function (data) { return console.log(data); }));
console.log(bcrypt_1.genSalt().then(function (data) { return console.log(data); }));
console.log(bcrypt_1.genSalt().then(function (data) { return console.log(data); }));
console.log(bcrypt_1.genSalt().then(function (data) { return console.log(data); }));
