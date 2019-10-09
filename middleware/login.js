/*
 * @Date: 2019-10-03 17:05:38
 * @LastEditors: 刘利军
 * @LastEditTime: 2019-10-03 17:08:13
 */

const jwt = require('jsonwebtoken');
const ADMIN = require('../models/Admin');
const assert = require('http-assert');
const loginMiddleware = async (req, res) => {
    const { username, password } = req.body;
    const USER_INFO = await ADMIN.findOne({ username }).select('+password');
    // if (!USER_INFO) {
    //     return res.status(422).send({ message: '用户不存在' });
    // }
    assert(USER_INFO, 422, '用户不存在');
    const IS_VALID = require('bcrypt').compareSync(password, USER_INFO.password);
    // if (!IS_VALID) {
    //     return res.status(422).send({ message: '密码错误' });
    // }
    assert(IS_VALID, 422, '密码错误');
    const TOKEN = jwt.sign({ id: USER_INFO._id }, req.app.get('secret'));
    res.send({ TOKEN });
}
module.exports = () => loginMiddleware;