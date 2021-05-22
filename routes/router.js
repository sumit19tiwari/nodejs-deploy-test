var express = require('express');
var router = express.Router();


var testController = require('../controllers/testController');



router.get('/getData',testController.getData);


module.exports = router;