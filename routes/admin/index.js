/*
 * @Date: 2019-09-30 20:51:48
 * @LastEditors: 刘利军
 * @LastEditTime: 2019-10-03 17:07:47
 */
module.exports = app => {
    const express = require('express');
    const router = express.Router({
        mergeParams: true
    })
    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body);
        res.send(model);
    });

    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
        res.send(model);
    });

    router.delete('/:id', async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id, req.body);
        res.send({ success: true });
    });

    router.get('/', async (req, res) => {
        let queryOptions = {};
        if (req.Model.modelName === 'Category') {
            queryOptions.populate = 'parent';
        }
        if (req.Model.modelName === 'Article') {
            queryOptions.populate = 'categories';
        }
        const data = await req.Model.find().setOptions(queryOptions).limit(10);
        res.send(data);
    });

    router.get('/info/:id', async (req, res) => {
        const data = await req.Model.findById(req.params.id);
        res.send(data);
    });

    const authMiddleware = require('../../middleware/auth');
    const resourceMiddleware = require('../../middleware/resource');
    app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router);

    const multer = require('multer');
    const upload = multer({ dest: __dirname + '/../../uploads' });
    app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    const loginMiddleware = require('../../middleware/login');
    app.post('/admin/api/login', loginMiddleware())
    app.use(async (err, req, res, next) => {
        res.status(err.statusCode || 500).send({ message: err.message });
    })
}