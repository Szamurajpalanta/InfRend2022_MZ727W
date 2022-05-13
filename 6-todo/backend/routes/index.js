const {Router} = require('express');
const controllers = require('../controllers');
const router = Router();
router.get('/', (req, res) => res.send('Router vagyok.'));

router.get('/task', controllers.getAllTasks);
router.get('/task/:id', controllers.getTaskById);
router.post('/task', controllers.createTask);
router.put('/task/:id', controllers.updateTask);
router.delete('/task/:id', controllers.deleteTask);

module.exports = router;