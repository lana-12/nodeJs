//Ici définir les routes

const router = require('express').Router();
const {
    homeCtrl,
    tasksListCtrl,
    userSelectCtrl,
    userIdCtrl

} = require('../controllers/app.ctrl');

router.get('/home', homeCtrl);
router.get('/tasksList', tasksListCtrl);
router.get('/usersList', userSelectCtrl);
router.get('/userSelect/:id', userIdCtrl)


module.exports = router;