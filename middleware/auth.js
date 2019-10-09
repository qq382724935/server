/*
 * @Date: 2019-10-03 16:53:14
 * @LastEditors: 刘利军
 * @LastEditTime: 2019-10-03 17:08:32
 */
const jwt = require('jsonwebtoken');
const ADMIN = require('../models/Admin');
const assert = require('http-assert');

const authMiddleware = async (req, res, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop();
    assert(token, 401, '请先登录')
    const { id } = jwt.verify(token, req.app.get('secret'));
    assert(id, 401, '请先登录')
    req.user = await ADMIN.findById(id);
    assert(req.user, 401, '请先登录');
    await next();
}

module.exports = () => authMiddleware; 