const userService = require('../service/user-service');
const config = require('config');

class AuthController {
    async registration(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await userService.registration(email, password);

            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true});

            return res.json(userData);

        } catch (err) {
            console.log(err)
        }
    }

    async login(req, res, next) {
        try {

        } catch (err) {

        }
    }

    async logout(req, res, next) {
        try {

        } catch (err) {

        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            return res.redirect(config.get('clientUrl'));
        } catch (err) {
            console.log(err)
        }
    }

    async refresh(req, res, next) {
        try {

        } catch (err) {

        }
    }
}

module.exports = new AuthController();

