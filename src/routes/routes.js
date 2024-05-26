const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');
const adminControllers = require('../controllers/adminControllers');

router.get('/', controllers.getIndex)
router.get('/projects', controllers.getProjects)
router.get('/edu', controllers.getEdu)
router.get('/employment', controllers.getEmp)
router.get('/skills', controllers.getSkills)
router.get('/blogs', controllers.getBlogs)
router.get('/admin', adminControllers.getAdminLogin)
router.get('/adminIndex', adminControllers.getAdmin)


module.exports = router;