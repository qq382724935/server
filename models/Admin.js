/*
 * @Date: 2019-09-30 21:17:40
 * @LastEditors: 刘利军
 * @LastEditTime: 2019-10-03 15:35:12
 */
const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    username: { type: String },
    password: {
        select: false,
        type: String, set(val) {
            return require('bcrypt').hashSync(val, 10)
        }
    },
});
module.exports = mongoose.model('Admin', schema);