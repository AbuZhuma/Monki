const express = require('express');
const createTodo = require('../controllers/todo/create');
const editTodo = require('../controllers/todo/edit');
const getTodo = require('../controllers/todo/get');
const deleteTodo = require('../controllers/todo/delete');
const checkId = require('../middlewares/checkId');
const authenticateJWT = require('../middlewares/checkToken');
const router = express.Router();

router.post("/",authenticateJWT, createTodo)
router.patch("/:id",authenticateJWT, checkId, editTodo)
router.get("/",authenticateJWT, getTodo)
router.get("/:id",authenticateJWT, getTodo)
router.delete("/:id",authenticateJWT, checkId, deleteTodo)

module.exports = router

