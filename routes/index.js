const Router = require('express');
const authController = require('../controllers/auth-controller');
const notesController = require('../controllers/notes-controller');
const router = new Router();

// autorization
router.post('/auth/registration', authController.registration);
router.post('/auth/login', authController.login);
router.post('/auth/logout', authController.logout);
router.get('/auth/activate/:link', authController.activate);
router.get('/auth/refresh', authController.refresh);

// notes
router.post('/notes/create', notesController.createNote);
router.get('/notes/', notesController.getAllNotes);
router.get('/notes/:id', notesController.getNote);

module.exports = router;