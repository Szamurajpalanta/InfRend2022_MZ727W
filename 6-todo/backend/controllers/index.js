const { Todo } = require('../models')

const getAllTodo = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        return res.status(200).json(todos);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
}

const getTodoById = async (req, res) => {
    try {
        const todoId = req.params.id;
        const todo = await Todo.findOne({
            where: { id: todoId },
        });
        if (todo) {
            return res.status(200).json(todo);
        }
        return res.status(404).send('404: Nem található rekord a megadott azonosítóval.');
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
}

const createTodo = async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        return res.status(200).json(todo);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
}

const updateTodo = async (req, res) => {
    try {
        const todoId  = req.params.id;
        const updated = await Todo.update(req.body, {
            where: { id: todoId }
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

const deleteTodo = async (req, res) => {
    try {
        const { todoId } = req.params;
        const deleted = await Todo.destroy({
            where: { id: todoId }
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
    getAllTodo,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
}