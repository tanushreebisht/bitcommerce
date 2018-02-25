var express = require('express');
var router = express.Router();

// Require controller modules
var tshirts_controller = require('../controllers/tshirtscontroller.js');

// GET request for one tshirt
router.get('/:itemid', tshirts_controller.tshirts_detail);

module.exports = router;