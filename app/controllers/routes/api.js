const express = require('express');
const {getTasks, getTypes} = require("../tasks")

const router = express.Router()
router.get("/tasks", getTasks)
router.get("/task-types", getTypes)

module.exports = {router}