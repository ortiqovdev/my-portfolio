const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');
const adminControllers = require('../controllers/adminControllers');

router.get('/', controllers.getIndex)
router.get('/admin', adminControllers.getAdmin)
router.get('/login', controllers.getLogin)
router.get('/blogs', controllers.getBlogs)
router.get('/projects', controllers.getProjects)


module.exports = router;