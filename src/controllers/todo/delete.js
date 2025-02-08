const Todo = require("../../models/todo")

const deleteTodo = async(req, res) => {
      try {
            const id = req.params.id
            let {userid} = req.user
            if(id === "all"){ 
                  const del = await Todo.deleteMany({userid: userid})  
                  if(del){
                        res.status(200).send(`All deleted!`)
                        return
                  }
            }
            const del = await Todo.findOneAndDelete({id: id})
            if(del){
                  res.status(200).send(`Task deleted!`)
                  return
            }
            res.status(404).send("Todo not found")
      } catch (error) {
            console.log(error)
            res.status(400).send(error)
      }
}
module.exports = deleteTodo   