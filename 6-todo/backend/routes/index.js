const {Router} = require('express');
const controllers = require('../controllers');
const router = Router();
router.get('/', (req, res) => res.send('Router vagyok.'));

router.post('/task', controllers.getTaskById);
router.get('/task', controllers.getAllTasks);
router.get('/task/:id', controllers.getTaskById);
router.put('/task/:id', controllers.updateTask);
router.delete('/task/:id', controllers.deleteTask);

module.exports = router;