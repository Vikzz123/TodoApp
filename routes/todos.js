const express = require("express");
const router = express.Router();

const {createTodo} = require("../controllers/createTodo");

const {getTodo,getTodoById} = require("../controllers/getTodo");

//define api routes

router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos:id", getTodoById);

module.exports = router;