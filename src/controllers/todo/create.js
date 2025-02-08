const generateRandomID = require("../../helpers/genIdH")
const Todo = require("../../models/todo")

const createTodo = async(req, res) => {
      try {
            const body = req.body
            const id = await generateRandomID(10)
            let {userid} = req.user
            const date = new Date()
            const opt = {
                  id: id, 
                  title: body.title, 
                  createdAt: date, 
                  status: "active", 
                  description: body.description,
                  userid: userid
            }
            const newtask = new Todo(opt)
            newtask.save()
            res.status(200).json({
                  message: "task created", 
                  id: id
            })
      } catch (error) {
            console.log(error)
            res.status(500).send(error)
      }
}
module.exports = createTodo