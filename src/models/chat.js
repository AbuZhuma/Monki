const mongoose = require("mongoose")

const globalMessage = new mongoose.Schema({
      id: { type: String, required: true},
      text: {type: String, required: true},
      time: {type: String, required: true},
      user: {type: String, required: true},
})

const GlobalMessage = mongoose.model('message', globalMessage, "globalchat");

module.exports = GlobalMessage