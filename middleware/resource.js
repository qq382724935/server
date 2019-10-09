/*
 * @Date: 2019-10-03 16:56:14
 * @LastEditors: 刘利军
 * @LastEditTime: 2019-10-03 16:56:14
 */
const resourceMiddleware = async (req, res, next) => {
    const MODEL_NAME = require('inflection').classify(req.params.resource);
    req.Model = require(`../models/${MODEL_NAME}`);
    next();
}
module.exports = () => {
    return resourceMiddleware;
}