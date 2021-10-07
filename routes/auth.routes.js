const {Router} = require('express');
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const router = Router();

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Enter your email address.').isEmail(),
        check('password', 'The password must consist of leas 6 simbols').isLength({min: 6})
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array(), message: 'Incorrect data'})
        }
        const {email, password} = req.body;
        const candidate = await User.findOne({email});
        if (candidate) {
            return res.status(400).json({message: 'E-mail is already busy.'})
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({email, password: hashedPassword});

        await user.save();

        res.status(201).json({message: 'The user has been created.'});

    } catch (e) {
        res.status(500).json({message: 'Something went wrong. Try again.'});
    }
})
// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Enter a valid email.').normalizeEmail().isEmail(),
        check('password', 'Enter the correct password').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array(), message: 'Incorrect data'})
            }

            const {email, password} = req.body;
            const user = await User.findOne({email});

            if(!user) {
                return res.status(400).json({message: 'User not found.'});
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch) {
                return res.status(400).json({message: 'Wrong password.'});
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '12h'}
            );

            res.json({token, userId: user.id});

        } catch (e) {
            res.status(500).json({message: 'Something went wrong. Try again.'});
        }
})

module.exports = router;