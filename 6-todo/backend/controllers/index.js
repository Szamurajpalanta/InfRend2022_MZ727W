const { Task } = require('../models')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        return res.status(200).json(tasks);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
}

const getTaskById = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findOne({
            where: { id: taskId },
        });
        if (task) {
            return res.status(200).json(task);
        }
        return res.status(404).send('404: Nem található rekord a megadott azonosítóval.');
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        return res.status(200).json(task);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
}

const updateTask = async (req, res) => {
    try {
        const taskId  = req.params.id;
        const updated = await Task.update(req.body, {
            where: { id: taskId }
        });
        if (updated) {
            return res.status(200).json(updated);
        }
        throw new Error('404: A megadott rekord nem található.');
    } catch (err) {
    return res.status(500).json({
        message: err.message
    });
    }
};

const deleteTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const deleted = await Task.destroy({
            where: { id: taskId }
        });
        if (deleted) {
            return res.status(200).send("A megadott rekord sikeresen törölve lett.");
        }
        throw new Error("404: A megadott rekord nem található.");
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {    
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}