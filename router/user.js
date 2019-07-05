const router = require('express').Router();
const User = require('../controllers/user')

router.get('/', User.getUser);
router.get('/:id', User.getUserById);
router.post('/', User.postUser);
router.put('/:id', User.putUse);
router.delete('/:id', User.deleteUsers);

module.exports = router;