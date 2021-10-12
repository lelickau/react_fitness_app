const User = require('../models/User');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const config = require('config');

class UserService {
    async registration(email, password) {
        const candidate = await User.findOne({email});

        if (candidate) {
            return res.status(400).json({message: 'E-mail is already busy.'});
        }

        const hashPassword = await bcrypt.hash(password, 12);
        const activationLink = uuid.v4();

        const user = await User.create({email, password: hashPassword, activationLink});
        await mailService.sendActivationMail(email, `${config.get('baseUrl')}/api/activate/${activationLink}`);

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
    }

    async activate(activationLink) {
        const user = await User.findOne({activationLink});
        if (!user) {
            return res.status(400).json({message: 'Error activation link'});
        }
        console.log(user);
        user.isActivatedMail = true;
        await user.save();
    }
}

module.exports = new UserService();
