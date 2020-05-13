const { Router } = require('express');
const router = Router();

const { getUsers, createUser, getUserById, deleteUserById, updateUser } = require('../controllers/controllers');

router.get('/users', getUsers); // para visualizar 
router.get('/users/:id', getUserById); // para guardar o crear
router.delete('/users/:id', deleteUserById); // para guardar o crear
router.post('/createuser', createUser); // para guardar o crear
router.put('/users/:id', updateUser); // para guardar o crear


module.exports = router;