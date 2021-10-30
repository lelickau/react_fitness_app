const userService = require('../service/user-service');
const config = require('config');
const {validationResult} = require('express-validator');
const ApiError = require('../exeptions/api-error');

class AuthController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Validation error', errors.array()))
            }
            const {email, password} = req.body;
            const userData = await userService.registration(email, password);

            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true});
            return res.json(userData);

        } catch (err) {
            next(err);
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await userService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true});

            return res.json(userData);
        } catch (err) {
            next(err);
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            console.log(refreshToken)
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (err) {
            next(err);
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            return res.redirect(config.get('clientUrl'));

        } catch (err) {
            next(err);
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true});

            return res.json(userData);

        } catch (err) {
            next(err);
        }
    }
}

module.exports = new AuthController();

