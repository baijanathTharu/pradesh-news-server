const express = require('express');

const errorHandler = require('../../middlewares/errorHandler');
const { getAllPradeshCtrl } = require('./pradesh.controller');
const { getPradeshCtrl } = require('./pradesh.controller');

const router = express.Router();

router.get('/', getAllPradeshCtrl);

router.get('/:id', errorHandler(getPradeshCtrl));

module.exports = router;
