
const cse4050models = require('../models/kanbanApp').cse4050models;


const getTasks = (request, response) => {
    response.status(200).send(cse4050models.taskListModel());
    return;
}

const getTypes = (request, response) => {
    response.status(200).send(cse4050models.taskListModel());
    return;
}


module.exports = {getTasks, getTypes}