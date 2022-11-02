import { Task } from "./task";

document.getElementById("btn-addtask").addEventListener("click", createAndStoreTask);

let tasks = [
    new Task("clean", "kitchen", false),
    new Task("clean", "zink", false),
    new Task("shop", "sallad", true)
]

let completed = [];
let notCompleted = [];

// loopar igenom de hårdkodade tasken som ligger i tasks-listan

for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed === true) {
        completed.push(tasks[i]);
    } else {
        notCompleted.push(tasks[i]);
    }
}


loadTodoList ();

loadCompletedList();


// tar bort vald task från notCompleted -> sorterar om completed och notCompleted FUNKAR
function deleteTask (removedTask, indexOfTask){

    console.log(removedTask);
    console.log(indexOfTask);

    notCompleted.splice(indexOfTask, 1);
    
    document.getElementById(removedTask.chore).innerHTML= '';

    document.getElementById("bodycare").innerHTML = '';
    document.getElementById("clean").innerHTML = '';
    document.getElementById("health").innerHTML = '';
    document.getElementById("shop").innerHTML = '';
    document.getElementById("social").innerHTML = '';
    document.getElementById("study").innerHTML = '';
    document.getElementById("others").innerHTML = '';
    
    
    loadTodoList ();

    loadCompletedList();

}

// flyttar en task till completed och tar bort den från notCompleted -> sorterar om completed och notCompleted FUNKAR


function moveToCompleted(completedTask, indexOfTask){
    console.log(completedTask);

    completedTask.completed = true;
    console.log(completedTask);

    completed.push(completedTask);
    console.log(completed);
    
    console.log(indexOfTask);
    notCompleted.splice(indexOfTask, 1);

    console.log(notCompleted);
    
    document.getElementById(completedTask.chore).innerHTML = '';

    document.getElementById("bodycare").innerHTML = '';
    document.getElementById("clean").innerHTML = '';
    document.getElementById("health").innerHTML = '';
    document.getElementById("shop").innerHTML = '';
    document.getElementById("social").innerHTML = '';
    document.getElementById("study").innerHTML = '';
    document.getElementById("others").innerHTML = '';
    
    loadTodoList ();
    loadCompletedList();

}


    // Skapa strukturen på todolist för den hårdkodade punkterna i listan

    function loadCompletedList() { 


        for (let i = 0; i < completed.length; i++) {

            let finnishedContainer = document.getElementById("finnished");
            let container = document.createElement("div");
            let chore = document.createElement("span");
            let btnContainer = document.createElement("div");
            let checkbtn = document.createElement("button");
            let trashbtn = document.createElement("button");
            
            container.setAttribute("id", completed[i].chore);
            checkbtn.setAttribute("type", "button");
            trashbtn.setAttribute("type", "button");
        
            let checkicon = document.createElement("span");
            let trashicon = document.createElement("span");
            
        
            container.className = "task";
            btnContainer.className = "btn-container";
        
            checkicon.className = "material-symbols-outlined";
            checkbtn.className = "task__checkbtn";
        
            trashicon.className = "material-symbols-outlined";
            trashbtn.className ="task__trashbtn";

        
            chore.className = "task__chore";
            
            chore.innerHTML = completed[i].chore;
            checkicon.innerHTML = "done";
            trashicon.innerHTML = "delete";
            
            finnishedContainer.appendChild(container);

            container.appendChild(chore);
            container.appendChild(btnContainer);
            btnContainer.appendChild(trashbtn);
            btnContainer.appendChild(checkbtn);
            
            checkbtn.appendChild(checkicon);
            trashbtn.appendChild(trashicon);
        

    
        }  
    }


    function loadTodoList () { 

        for (let i = 0; i < notCompleted.length; i++) {

            let category = document.getElementById(notCompleted[i].category); //ex. <div id="clean"></div>
            let container = document.createElement("div");
            let chore = document.createElement("span");
            let btnContainer = document.createElement("div");
            let checkbtn = document.createElement("button");
            let trashbtn = document.createElement("button");

            container.setAttribute("id", notCompleted[i].chore);
            checkbtn.setAttribute("type", "button");
            trashbtn.setAttribute("type", "button");
        
            let checkicon = document.createElement("span");
            let trashicon = document.createElement("span");
            
        
            container.className = "task";
            btnContainer.className = "btn-container";
        
            checkicon.className = "material-symbols-outlined";
            checkbtn.className = "task__checkbtn";
        
            trashicon.className = "material-symbols-outlined";
            trashbtn.className ="task__trashbtn";

            chore.className = "task__chore";
            
            chore.innerHTML = notCompleted[i].chore;
            checkicon.innerHTML = "done";
            trashicon.innerHTML = "delete";
        
            category.appendChild(container);
            container.appendChild(chore);
            container.appendChild(btnContainer);
            btnContainer.appendChild(trashbtn);
            btnContainer.appendChild(checkbtn);
            
            checkbtn.appendChild(checkicon);
            trashbtn.appendChild(trashicon);
        
            checkbtn.addEventListener("click", ()=> {
                moveToCompleted(notCompleted[i], i);
            });

            trashbtn.addEventListener("click", ()=> {
                deleteTask(notCompleted[i], i);
            });
    
        }  
    }
    
// Skapa en ny task 



function createAndStoreTask() {

    let category = document.getElementById("category").value;
    let chore = document.getElementById("chore").value;

   
    let task = new Task (category, chore, false);
    tasks.push(task);

    let clearChore = document.getElementById("chore");
    clearChore.value = "";

    addNewTaskToList ()

}


// lägg till ny task i todo listan

function addNewTaskToList () {

  

    let category = document.getElementById(tasks[tasks.length - 1].category); //ex. <div id="clean"></div>
    let container = document.createElement("div");
    let chore = document.createElement("span");
    let btnContainer = document.createElement("div");
    let checkbtn = document.createElement("button");
    let trashbtn = document.createElement("button");
    
    container.setAttribute("id", tasks[tasks.length - 1].chore );
    checkbtn.setAttribute("type", "button");
    trashbtn.setAttribute("type", "button");

    let checkicon = document.createElement("span");
    let trashicon = document.createElement("span");
    

    container.className = "task";
    btnContainer.className = "btn-container";

    checkicon.className = "material-symbols-outlined";
    checkbtn.classList.add ("task__checkbtn");
    trashbtn.addEventListener("click", ()=> {
        moveToCompleted(tasks[tasks.length - 1].chore);
    });

    trashicon.className = "material-symbols-outlined";
    trashbtn.classList.add ("task__trashbtn");
    trashbtn.addEventListener("click", ()=> {
        deleteTask(tasks[tasks.length - 1].chore);
    });


    chore.className = "task__chore";
    
    chore.innerHTML = tasks[tasks.length - 1].chore;
    checkicon.innerHTML = "done";
    trashicon.innerHTML = "delete";

    category.appendChild(container);
    container.appendChild(chore);
    container.appendChild(btnContainer);
    btnContainer.appendChild(trashbtn);
    btnContainer.appendChild(checkbtn);
    
    checkbtn.appendChild(checkicon);
    trashbtn.appendChild(trashicon);
    console.log(tasks[tasks.length - 1]);

}








