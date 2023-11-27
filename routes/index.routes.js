const express = require('express');
const { index, detail } = require('../controllers/indexController');


var router = express.Router();

/* / */
router
    .get('/', index)
    .get('/detalle/:id', detail)

module.exports = router
