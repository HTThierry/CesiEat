const mongoose = require('mongoose')    
const Schema = mongoose.Schema

const account = new Schema({
    AccountId: { type: Schema.Types.ObjectId, required: true, auto: true },
    UserId: { type: Schema.Types.ObjectId, ref: 'User' }, 
    AccountStatus: String,
    CreatedAt: Date,
    UpdateAt: Date
})


module.exports = mongoose.model('Account', account)
