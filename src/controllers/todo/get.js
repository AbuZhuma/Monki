const Todo = require("../../models/todo")

const getTodo = async(req, res) => {
      try {
            const id = req.params.id 
            let {userid} = req.user
            if(!id){
                  const all = await Todo.find()
                  let r = all.filter((el) => el.userid === userid)
                  return res.status(200).json(r)
            }
            const forId = await Todo.findOne({id: id})
            if(!forId) return res.status(404).send("Todo not found")
            res.status(200).json(forId)
      } catch (error) {
            console.log(error)
            res.status(500).send(error)
      }
}
module.exports = getTodo