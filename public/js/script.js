if (location.pathname == '/home') {

    let tasks = [];
    let selectOptions = null;
    let taskUser = " ";
    let pTask = null;

// Display user if done 
function getTasks(task){
    if (task.done === true) {
        document.getElementById('tasksDone').innerHTML += `

                    <div class="${task.cat} ${task.done ? 'done' : ''}">
                        <p>${task.title}</p>
                    </div>`;
    } else {

        document.getElementById('tasksPending').innerHTML += `
                <div class="${task.cat} ${task.done ? 'pending' : ''}">
                    <p>${task.title}</p>
                </div>`;
    }
}
    //fetch tasks done/pending

    fetch('https://localhost:4443/tasksList', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(tasks => {
            tasks.forEach(task => {

                getTasks(task)
            }
        );


        });

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

            users.forEach(user => {
                const option = document.createElement('option');
                option.value = user.id;
                option.textContent = user.name;
                selectOptions.appendChild(option);
            });

            selectOptions.addEventListener('change', (e) => {
                e.preventDefault();
                // console.log(e);

                let id = selectOptions.value;
                console.log(id);



                if (taskUser) {
                    taskUser.innerHTML = ''
                }


                fetch('https://localhost:4443/userSelect/' + id, {
                    method: "GET"
                })

                    .then(res => res.json())
                    .then(data => {
                        tasks = data
                        taskUser = document.getElementById('taskUser')

                        //faire une fonction render(data)
                        tasks.forEach(task => {
                            console.log(task);
                            console.log(task.title);

                            const pTask = document.createElement('p');
                            pTask.textContent = task.title;
                            taskUser.appendChild(pTask);









                        })

                    })


            })

        })





}