const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');
const adminControllers = require('../controllers/adminControllers');

router.get('/', controllers.getIndex)
router.get('/blogs', controllers.getBlogs)
router.get('/projects', controllers.getProjects)
router.get('/admin', adminControllers.getAdmin)


module.exports = router;