const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');
const adminControllers = require('../controllers/adminControllers');

router.get('/', controllers.getIndex ) 
router.get('/admin', adminControllers.getAdmin ) 
router.get('/login', controllers.getLogin ) 

module.exports = router;