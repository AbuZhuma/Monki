const express = require('express');
const createMsg = require('../controllers/chat/createMsg');
const getMsg = require('../controllers/chat/getMsg');
const authenticateJWT = require('../middlewares/checkToken');
const router = express.Router();

router.post("/global",authenticateJWT, createMsg)
router.get("/global/:type", authenticateJWT, getMsg)

module.exports = router