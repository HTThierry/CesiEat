const mongoose = require('mongoose')    
const Schema = mongoose.Schema

const notification = new Schema({
    NotificationId: { type: Schema.Types.ObjectId, required: true, auto: true },
    UserId: { type: Schema.Types.ObjectId, ref: 'User' }, 
    Message: String,
    DateSent: Date,
    Status: String
})

module.exports = mongoose.model('Notification', notification)