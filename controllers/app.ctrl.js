const { resolve } = require('path');
const { users, tasks, cats } = require("../db/bdd.json");
const { randomUUID } = require('crypto');



//Route home
exports.homeCtrl = (req, res) => {
    res.sendFile(resolve('public', 'home.html'));
};


// list Tasks
exports.tasksListCtrl = (req, res) => {
    // Connexion à la BDD
    // Récupération des livres
    // Vérification de la cnx   
    res.json(tasks);
};

// Selected users
exports.userSelectCtrl = (req, res) => {
    // Connexion à la BDD
    // Récupération des livres
    // Vérification de la cnx   
    res.json(users);
};


// Selected cat
exports.catsListCtrl = (req, res) => {
    // Connexion à la BDD
    // Récupération des livres
    // Vérification de la cnx   
    res.json(cats);
};



// Selected user by id
exports.userIdCtrl = (req, res) => {
    // console.log(req.params.id);
    const filterTasks = tasks.filter(t => t.userId == req.params.id)
    res.json(filterTasks);
}


//Route create Form
exports.taskCreateCtrl = (req, res) => {
    res.sendFile(resolve('public', 'createTask.html'));
};


//Je n'y suis pas arrivée
//Create task 
exports.createCtrl = (req, res) => {
    // const newTask = req.body;
    // console.log(newTask);
    // newTask.id = randomUUID();
    // newTask.done= false;
    // tasks.push(newTask);
    // updateJSON();
    // res.end();
};

//Function
function updateJSON() {
    writeFileSync(
        resolve('db', 'bbd.json'),
        JSON.stringify({ tasks }, null, 2)
    );
}