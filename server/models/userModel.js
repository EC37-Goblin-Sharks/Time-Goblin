const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    points: Number,
})

userSchema.pre('save', function (next) {
    const user = this;
    bcrypt.hash(user.password, SALT_WORK_FACTOR)
        .then((hash) => {
            user.password = hash;
            return next();
        })
        .catch((err) => next({
            log: `hash in userModel: ERROR: ${typeof err === `object` ? JSON.stringify(err) : err
                }`,
            message: {
                err: 'Error occurred in hash method of userModel',
            }
        }));
})


const User = mongoose.model('user', userSchema);

module.exports = User;


/* //Sample POST body for new User
{
    "username": "timegoblin",
    "password": "codesmith",
    "firstName": "Time",
    "lastName": "Goblin",
}
// */