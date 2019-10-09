/*
 * @Date: 2019-09-30 21:06:54
 * @LastEditors: 刘利军
 * @LastEditTime: 2019-09-30 21:06:54
 */
module.exports = app => {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://127.0.0.1:27017/kings-db', {
        useNewUrlParser: true
    })
}