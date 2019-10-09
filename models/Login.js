/*
 * @Date: 2019-09-30 21:17:40
 * @LastEditors: 刘利军
 * @LastEditTime: 2019-10-03 15:46:48
 */
const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    token: { type: String },
    username: { type: String },
    password: { type: String },
});
module.exports = mongoose.model('Login', schema);