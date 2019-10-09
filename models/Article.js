/*
 * @Date: 2019-09-30 21:17:40
 * @LastEditors: 刘利军
 * @LastEditTime: 2019-10-03 14:31:03
 */
const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    title: { type: String },
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
    body: { type: String }
});
module.exports = mongoose.model('Article', schema);