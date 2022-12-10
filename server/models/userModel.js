const mongoose = require('mongoose');
const { schema } = require ('webpack-dev-server');

const MONGO_URI = 'mongodb+srv://codesmith:ecri37@time-goblin.rrflcmy.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(Mongo_URI, {
    userNewURLParse: true,
    userUnifiedTopology: true,
    dbName: 'time-goblin'
})
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

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