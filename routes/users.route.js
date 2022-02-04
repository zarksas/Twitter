const { Router } = require('express');
const router = Router();

const { usersControllers } = require('../controllers/users.controllers');

router.post('/users', usersControllers.postUser);
router.patch('/users/:id', usersControllers.patchSavesById)
router.delete('/users/:id', usersControllers.deleteUserById)






module.exports = router;