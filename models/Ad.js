/*
 * @Date: 2019-09-30 21:17:40
 * @LastEditors: 刘利军
 * @LastEditTime: 2019-10-03 14:53:58
 */
const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: { type: String },
    items: [{
        image: { type: String },
        url: { type: String },
        title: { type: String },
    }],
});
module.exports = mongoose.model('Ad', schema);