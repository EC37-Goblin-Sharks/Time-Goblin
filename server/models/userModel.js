const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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