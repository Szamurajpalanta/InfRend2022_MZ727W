const {Router} = require('express');
const controllers = require('../controllers');
const router = Router();
router.get('/', (req, res) => res.send('Router vagyok.'));

router.post('/todo', controllers.createTodo);
router.get('/todo', controllers.getAllTodo);
router.get('/todo/:id', controllers.getTodoById);
router.put('/todo/:id', controllers.updateTodo);
router.delete('/todo/:id', controllers.deleteTodo);

module.exports = router;