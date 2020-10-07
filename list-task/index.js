module.exports = async function (context, req) {
    context.log("Adding a task to the planner");
    const { v4: uuidv4 } = require('uuid');
    const tasks = [
        {
            id:uuidv4(),
            descripcion:"prueba",
            dueDate:new Date(),
            status: "Ready",
            responsable:{name:"admin",email:"admin@mail.com"}
        },
        {
            id:uuidv4(),
            descripcion:"prueba2",
            dueDate:new Date(),
            status: "Progress",
            responsable:{name:"carlos",email:"carlos@mail.com"}
        },
        {
            id:uuidv4(),
            descripcion:"prueba3",
            dueDate:new Date(),
            status: "Completed",
            responsable:{name:"andres",email:"andres@mail.com"}
        }
    ];                 

    context.res = {
        status: 200,
        body: tasks,
    };
}