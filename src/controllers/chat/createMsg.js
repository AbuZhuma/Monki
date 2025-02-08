const GlobalMessage = require("../../models/chat");

const createMsg = async(req, res) => {
      try {
            let newMsg = new GlobalMessage(res.body)
            newMsg.save()
            res.status(200).send("Sendet!")
      } catch (error) {
            console.log(error);
            res.status(404).send("Please trye again, problem with create msg")
      }
}

module.exports = createMsg