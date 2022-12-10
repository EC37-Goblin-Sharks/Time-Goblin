const mongoos = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    cookieId: {type: String, required: true, unqiue: true},
    createdAt: {type: Date, expires: 600000, default: Date.now},
});

const session = mongoose.model('session', sessionSchema);

module.exports = session;