document.querySelector('button').onclick = () => {
    let name = document.querySelector('#name').value
    let telegram = document.querySelector('#telegram').value
    let git = document.querySelector('#git').value
    let jobNegative = document.querySelector('#jobNegative').value
    let comments1 = document.querySelector('#comments1').value
    let comments2 = document.querySelector('#comments2').value
    let procent1 = document.querySelector('#procent1').value
    let procent2 = document.querySelector('#procent2').value
    let taskDey = document.querySelector('#taskDey').value
    let taskJob = document.querySelector('#taskJob').value


    let data = {
        name: name,
        telegram: telegram,
        git: git,
        jobNegative: jobNegative,
        comments1: comments1,
        comments2: comments2,
        procent1: procent1,
        procent2: procent2,
        taskDey: taskDey,
        taskJob: taskJob
    }


    document.getElementById("app").innerHTML = `<div class="modal">
        <p>name - ${data.name}</p>
        <p>telegram - ${data.telegram}</p>
        <p>git - ${data.git}</p>
        <p>jobNegative - ${data.jobNegative}</p>
        <p>comments1 - ${data.comments1}</p>
        <p>comments2 - ${data.comments2}</p>
        <p>procent1 - ${data.procent1}</p>
        <p>procent2 - ${data.procent2}</p>
        <p>taskDey - ${data.taskDey}</p>
        <p>taskJob - ${data.taskJob}</p>
        <button onClick="beck()">Назад</button>
    </div>`;
    console.log(data)
}

const beck = () => document.getElementById("app").innerHTML = `<div class="modalClose"></div>`
