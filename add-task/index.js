
module.exports = async function (context, req) {
    context.log('Adding a task to the planner');
    const task = req.body;
    const { v4: uuidv4 } = require('uuid');
    const id = uuidv4();
    const descripcion = task.descripcion;
    const dueDate = task.dueDate;
    const status = task.status;
    const responsable = task.responsable;
  
    const responseMessage = {descripcion:descripcion,
        dueDate:dueDate,status:status,responsable:responsable};

    context.res = {
        status: 201,
        body: responseMessage
    };
}
