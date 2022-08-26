const router = require('express').Router();
const{
    thoughtCount,
    getThought,
    createThought,
    deleteThought
}=require('../../controllers/thoughtController');

router.route('/').get(thoughtCount).post(createThought);
router.route('./:thoughtId').get(getThought).delete(deleteThought)