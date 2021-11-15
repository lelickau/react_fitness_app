module.exports = class UserDto {
    email;
    id;
    isActivated;
    avatar;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivatedMail;
        this.avatar = model.avatar;
    }
}