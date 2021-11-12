const Router = require('express');
const authController = require('../controllers/auth-controller');
const notesController = require('../controllers/notes-controller');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middleware/auth-middleware');
const foodController = require('../controllers/food-controller');

// autorization
router.post('/auth/registration',
    body('email').isEmail(),
    body('password').isLength({min:3, max:32}),
    authController.registration
);
router.post('/auth/login', authController.login);
router.post('/auth/logout', authController.logout);
router.get('/auth/activate/:link', authController.activate);
router.get('/auth/refresh', authController.refresh);
router.post('/auth/reset', authController.reset);
router.post('/auth/update/:token', authController.updatePassword);

// notes
router.post('/notes/create', authMiddleware, notesController.createNote);
router.delete('/notes/delete', authMiddleware, notesController.deleteNote);
router.get('/notes/getall', authMiddleware, notesController.getAllNotes);
router.put('/notes/edit/:id', authMiddleware, notesController.editNote);

// foods
router.post('/foods/create', authMiddleware, foodController.createFood);
router.get('/foods/getfoods', authMiddleware, foodController.getFoods);
router.delete('/foods/delete', authMiddleware, foodController.deleteFood);

module.exports = router;