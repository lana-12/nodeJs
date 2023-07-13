if (location.pathname == '/home') {

    let tasks = [];
    let selectOptions = null;
    let taskUser = " ";
    let pTask = null;
    let taskUserD = "";
    let tasksUserP="";



    // //fetch tasks done/pending
    // fetch('https://localhost:4443/tasksList', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    // })
    //     .then(res => res.json())
    //     .then(tasks => {
    //         tasks.forEach(task => {

    //             if (task.done === true) {

    //                 document.getElementById('tasksDone').innerHTML += `
    //                 <div class="${task.cat} ${task.done ? 'done' : ''}">
    //                     <p>${task.title}</p>
    //                 </div>`;
    //             } else {

    //                 document.getElementById('tasksPending').innerHTML += `
    //             <div class="${task.cat} ${task.done ? '' : 'pending'}">
    //                 <p>${task.title}</p>
    //             </div>`;
    //             }
    //         });


    //     });



    //fetch Select Users
    fetch('https://localhost:4443/usersList', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(users => {
            selectOptions = document.getElementById('userSelect');
            let optionUsers = "<option value='empty' selected>Sélectionner un Utilisateur</option>";
            users.forEach(user => {
                optionUsers += "<option value='" + user.id + "'>" + user.name + "</option>";
            
                // const option = document.createElement('option');
                // option.value = user.id;
                // option.textContent = user.name;
                // selectOptions.appendChild(option);
            });
            selectOptions.innerHTML = optionUsers;



            selectOptions.addEventListener('change', (e) => {
                e.preventDefault();
                // console.log(e);

                let id = selectOptions.value;
                console.log(id);

                if (taskUser) {
                    taskUser.innerHTML = ''
                }
                if (taskUserD) {
                    taskUserD.innerHTML = ''
                }
                if (tasksUserP) {
                    tasksUserP.innerHTML = ''
                }

                fetch('https://localhost:4443/userSelect/' + id, {
                    method: "GET"
                })

                    .then(res => res.json())
                    .then(data => {
                        console.log('ici ' , data)
                        tasks = data


                        taskUserD = document.getElementById('tasksUserDone');
                        tasksUserP = document.getElementById('tasksUserPending')

                        //faire une fonction render(data)
                        tasks.forEach(task => {
                            console.log(task);
                            console.log(task.title);


                            if(task.done == true){
                                const pTaskD = document.createElement('p');
                                pTaskD.textContent = task.title;
                                pTaskD.classList.add('done')
                                taskUserD.appendChild(pTaskD);
                                
                                
                            } else {
                                const pTaskP = document.createElement('p');
                                pTaskP.textContent = task.title;
                                pTaskP.classList.add('pending')

                                tasksUserP.appendChild(pTaskP);

                            }

                        })

                    })


            })

        })



}

// Create Task
    //Côté Front
        //Select => catégorie => fetch => get
        //Select => user => fetch => get
    //Côté back
        // Create Routing
        // Create Controller

if (location.pathname == '/task/create') {
    const form = document.querySelector('form');

    //fetch Select Users
    fetch('https://localhost:4443/usersList', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(users => {
            selectOptions = document.getElementById('selectUser');
            let optionUsers = "<option value='empty' selected>Sélectionner un Utilisateur</option>";
            users.forEach(user => {
                optionUsers += "<option value='" + user.id + "'>" + user.name + "</option>";

                // const option = document.createElement('option');
                // option.value = user.id;
                // option.textContent = user.name;
                // selectOptions.appendChild(option);
            });
            selectOptions.innerHTML = optionUsers;
        })

    fetch('https://localhost:4443/task/catsList', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(cats => {
            selectOptions = document.getElementById('selectCat');
            let optionCats = "<option value='empty' selected>Sélectionner une catégorie</option>";
            cats.forEach(cat =>{
                console.log(cat);
                
                    optionCats += "<option value='" + cat.name + "'>" + cat.name + "</option>";

                    // const option = document.createElement('option');
                    // option.value = user.id;
                    // option.textContent = user.name;
                    // selectOptions.appendChild(option);
                });
                selectOptions.innerHTML = optionCats;
        
            form.addEventListener('submit', e => {
                e.preventDefault();

                console.log(form);
                console.log(form.selectUser.value);
                console.log(form.title.value);
                console.log(form.selectCat.value);

                fetch('https://localhost:4443/task/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: form.title.value,
                        cat: form.selectCat.value,
                        user_id: form.selectUser.value
                    })
                }).then(()=> location.href = '/home');

            });

        })

    
    
}

