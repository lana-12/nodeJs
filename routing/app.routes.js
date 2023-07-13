//Ici définir les routes

const router = require('express').Router();
const {
    homeCtrl,
    tasksListCtrl,
    userSelectCtrl,
    userIdCtrl,
    taskCreateCtrl,
    catsListCtrl,
    createCtrl

} = require('../controllers/app.ctrl');

router.get('/home', homeCtrl);
router.get('/tasksList', tasksListCtrl);
router.get('/usersList', userSelectCtrl);
router.get('/userSelect/:id', userIdCtrl);
router.get('/task/create', taskCreateCtrl);
router.post('/create', createCtrl);
router.get('/task/catsList', catsListCtrl);


module.exports = router;