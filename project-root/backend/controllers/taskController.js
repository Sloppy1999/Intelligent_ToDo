const task = []; // Simulate tasks in memory for MVP

exports.getTask = (req, res) => {
    res.json(task);
};

exports.addTask = (req, res) => {
    const newTask = {id: Date.now(), ...req.body };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

exports.deleteTask = (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(task => task.id === Number(id));
    if (taskIndex >= 0) {
        tasks.splice(taskIndex,1);
        res.status(204).end();
    }else{
        res.status(404).json({ message: "Task not found"});
    }
};