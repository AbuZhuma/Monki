const GlobalMessage = require("../../models/chat");

const getMsg = async(req, res) => {
      try {
            let type = req.params.type
            if(type === "all"){
                  let allGmsg = await GlobalMessage.find({})
                  res.json(JSON.stringify(allGmsg))
                  return
            }
            res.status(501).send("Someting wrong!")
      } catch (error) {
            console.log(error);
            res.status(404).send("Please trye again, problem with create msg")
      }
}

module.exports = getMsg