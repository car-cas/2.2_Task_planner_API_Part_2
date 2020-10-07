
module.exports = async function (context, req) {
    context.log('Adding a task to the planner');
    const task = req.body;
    const id = uniqid(task.id);
    const descripcion = task.descripcion;
    const dueDate = task.dueDate;
    const status = task.status;
    const responsable = task.responsable;
  
    const responseMessage = {id:id,descripcion:descripcion,
        dueDate:dueDate,status:status,responsable:responsable};

    context.res = {
        status: 201,
        body: responseMessage
    };
}
