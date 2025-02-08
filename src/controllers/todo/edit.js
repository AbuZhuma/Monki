const Todo = require("../../models/todo")

const editTodo = async (req, res) => {
      try {
            const editing = req.body
            const id = req.params.id
            editing.id ? delete editing.id : null;
            editing.createdAt ? delete editing.createdAt : null;
            await Todo.findOneAndUpdate({id: id}, editing);
            res.status(200).send(`Todo changed!`)
      } catch (error) {
            console.log(error)
            res.status(500).send(error)
      }
}
module.exports = editTodo