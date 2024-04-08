const mongoose = require('mongoose')    
const Schema = mongoose.Schema

const user = new Schema({
    UserId: { type: Schema.Types.ObjectId, required: true, auto: true },
    name: String,
    UserName: String,
    PasswordHash: String,
    Email: String,
    accountTypeClient: Boolean,
    accountTypeDelevery: Boolean,
    accountTypeRestaurateur: Boolean,
})

module.exports = mongoose.model('User', user)