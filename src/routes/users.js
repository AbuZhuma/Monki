const express = require('express');
const register = require('../controllers/users/reg');
const login = require('../controllers/users/login');
const authenticateJWT = require('../middlewares/checkToken');
const router = express.Router();

router.post("/reg", register)
router.post("/login", login)
router.post("/isexist", authenticateJWT, (req, res) => {
      res.status(200).send("User is exist")
})

module.exports = router

