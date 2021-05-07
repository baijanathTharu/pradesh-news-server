const express = require('express');
const pradeshRouter = require('../modules/pradesh/prades.router');

const router = express.Router();

router.use('/pradeshes', pradeshRouter);

module.exports = router;
