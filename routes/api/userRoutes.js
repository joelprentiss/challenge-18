const router = require('express').Router();
const {
    userCount,
    getUser,
    createUser,
    deleteUser,
} = require('../../controllers/userController');


router.route('/').get(userCount).post(createUser);
router.route('/:userId').get(getUser).delete(deleteUser);

module.exports = router;