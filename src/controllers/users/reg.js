const checkUser = require("../../helpers/checkUser")
const generateRandomID = require("../../helpers/genIdH")
const User = require("../../models/user")

const register = async(req, res) => {
      try {
            const body = req.body
            if(!body || !body.username || !body.password){
                  res.status(501).send("Check you`r fields!")
                  return
            }
            const isExist = await checkUser(body.username)
            if(isExist){
                  res.status(501).send("User with this name already exist!")
                  return 
            }
            const id = await generateRandomID(10)
            const options ={
                  userid: id,
                  username: body.username, 
                  password: body.password
            }
            const newUser = new User(options)
            newUser.save()
            if(newUser){
               return res.status(200).send("User registered!")   
            }
            res.status(200).send("Please try again later!")
      } catch (error) {
            res.status(501).send(error)
      }
}
module.exports = register

