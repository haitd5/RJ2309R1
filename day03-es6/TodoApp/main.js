class Task {
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.status = 'processing';
    }
}

class TaskManager {
    static taskList =[];
    static addTask(task){
        this.taskList.push(task);
    }
    static getTaskList(){
        return this.taskList;
    }
    static getLastID(){
        let maxID = 0;
        for(let task of this.taskList){
            if(task.id > maxID){
                maxID = task.id;
            }
        }
        return maxID;
    }
    static removeTask(taskID){
        this.taskList = this.taskList.filter((task) => task.id != taskID)
    }


}

// function

function renderTaskList(){
    let htmls = TaskManager.getTaskList().map(function(task){
        return `
            <tr>
                <td>#task_${task.id}</td>
                <td>${task.name}</td>
                <td>${task.status}</td>
                <td>
                    <button class="btn btn-outline-warning btn-sm">
                        <i class="fa fa-check">
                            Make Done
                        </i>
                    </button>
                    <button class="btn btn-outline-danger btn-sm">
                        <i class="fa fa-trash">
                            Remove
                        </i>
                    </button>
                </td>
            </tr>
        `
    })
    document.getElementById('tbTaskList').innerHTML = htmls.join('');
}

function createTask(e){
    e.preventDefault();
    let taskName = document.getElementById('taskName').value;
    let taskID = TaskManager.getLastID();
    let task = new Task(taskID + 1, taskName);
    TaskManager.addTask(task);
    renderTaskList();
    reset();
}

function reset(){
    document.getElementById('taskName').value = '';
}

// create a list of tasks
TaskManager.addTask(new Task(1, "Bug fix"));
TaskManager.addTask(new Task(2, "Build Feature add to cart"));
TaskManager.addTask(new Task(3, "QA Task 001"));

renderTaskList();