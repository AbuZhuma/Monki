const checkId = (req, res, next) => {
      const id = req.params.id
      if(!id){
            res.status(403).send("Please send id in params")
            return
      }
      next()
}
module.exports = checkId