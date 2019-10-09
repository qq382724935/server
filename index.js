/*
 * @Date: 2019-09-28 15:12:29
 * @LastEditors: 刘利军
 * @LastEditTime: 2019-10-05 20:19:12
 */
const express = require('express');
const app = express();
app.set('secret', 'i2u3ifu4843hhg8hg4849gh4g844fh38');
app.use(require('cors')());
app.use(express.json());
app.use('/', express.static(__dirname + '/web'));
app.use('/uploads', express.static(__dirname + '/uploads'));
require('./plugins/db')(app);
require('./routes/admin')(app);
app.listen(3000, () => {
    console.log('3000');
});