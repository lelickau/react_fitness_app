const {Router} = require('express');
const Note = require('../models/Note');
const auth = require('../middleware/auth.middleware');
const router = Router();

router.post('/create', auth, async (req, res) => {
    try {
        const {title, marking, status} = req.body;
        const note = await new Note({
            title,
            marking,
            status,
            owner: req.user.userId,
            completed: false,
            important: false,
        });
        await note.save();
        res.status(201).json(note);

    } catch (e) {
        res.status(500).json({message: 'Something went wrong. Try again.'});
    }
});

router.get('/', auth, async (req, res) => {
    try {
        const notes = await Note.find({owner: req.user.userId});
        res.json(notes);

    } catch (e) {
        res.status(500).json({message: 'Something went wrong. Try again.'});
    }
});

router.get('/:id', auth, async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        res.json(note);

    } catch (e) {
        res.status(500).json({message: 'Something went wrong. Try again.'});
    }
});

module.exports = router;
