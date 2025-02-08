const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
      id: { type: String, required: true},
      title: {type: String, required: true},
      description: {type: String},
      status: {type: String, required: true},
      createdAt: {type: String, required: true},
      userid: { type: String, required: true},
})

const Todo = mongoose.model('todo', todoSchema, "todos");

module.exports = Todo