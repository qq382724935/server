/*
 * @Date: 2019-09-30 21:17:40
 * @LastEditors: 刘利军
 * @LastEditTime: 2019-10-02 11:49:08
 */
const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: { type: String },
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }
});
module.exports = mongoose.model('Category', schema);