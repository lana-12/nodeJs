const { resolve } = require('path');
const { users, tasks } = require("../db/bdd.json")


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



// Selected user by id
exports.userIdCtrl = (req, res) => {

    console.log(req.params.id);

    const filterTasks = tasks.filter(t => t.user_id == req.params.id)


    res.json(filterTasks);
}



//Function

function updateJSON() {

    writeFileSync(

        resolve('db', 'bbd.json'),

        JSON.stringify({ tasks }, null, 2)

    );

}