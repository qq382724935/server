/*
 * @Date: 2019-09-30 21:17:40
 * @LastEditors: 刘利军
 * @LastEditTime: 2019-10-02 12:34:22
 */
const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: { type: String },
    icon: { type: String },
});
module.exports = mongoose.model('Item', schema);