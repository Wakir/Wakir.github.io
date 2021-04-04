"use strict"
var counter=0;
var memory=NaN;
const writeList = () => {
    const text = String(document.getElementById("newTask").value);
    //Sprawdzic czemu to tak dziala
    if(!isNaN(text)){
        console.log("Nie można dodać pustego zadania!");
        return
    }
    counter++;
    const task = document.createElement("task"+counter);
    const deleteButton = document.createElement("delete-button"+counter);
    deleteButton.innerHTML = '<button id="delete-button'+counter+'" onclick= "deleteTask(task'+counter+')" class="delButton">X</button>'
    task.innerHTML = '<div id="task'+counter+'" onclick= "done(this, '+ counter + ')" class= "normal"><li> <div id="task-name-'+ counter + '" class= "normal">' + text + " " + '</div>'+deleteButton.innerHTML+'</li></div>';
    task.value = text;
    const ourList = document.getElementById("task-list");
    ourList.append(task);
}
const done = (elmnt,number) => {
    if(!isNaN(elmnt)){
        const task= document.getElementById("task-name-"+number);
    if (task.className === "normal"){
        task.className = "striked";
        let date = null;
        if (document.getElementById("taskDate"+number)==0)
        {
            console.log("Cos");
            date = document.getElementById("taskDate"+number)
        }
        else{
            date = document.createElement("taskDate"+number);
            elmnt.append(date);
        }
        let today = new Date();
        today = today.getFullYear()+'-'+ (today.getMonth()+1) + '-' + today.getDate();
        date.innerHTML = '<div id = "taskDate'+number+'" class= "normal">' + today + '</div>';
    }
    else{
        task.className = "normal";
        const today = document.getElementById("taskDate"+number);
        today.parentNode.removeChild(today);
    }
    }
}
const deleteTask = (id) => {
    memory=$(id);
    $(id).remove();
    console.log($(memory));
}
const unDo = () => {
    if (!isNaN($(memory))){
        console.log("Nie ma co cofnąć.");
        return
    }
    else{
        $("#task-list").append(memory);
        memory=$(NaN);
    }
}