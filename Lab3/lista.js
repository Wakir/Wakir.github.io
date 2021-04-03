"use strict"
var counter=0;
const writeList = () => {
    const text = String(document.getElementById("newTask").value);
    //Sprawdzic czemu to tak dziala
    if(! isNaN(text)){
        console.log("Nie można dodać pustego zadania!");
        return
    }
    const task = document.createElement("task");
    counter++;
    task.innerHTML = '<div onclick= "done(this, '+ counter + ')"> <div id="task-name-'+ counter + '" class= "normal">' + text + '</div> </div>';
    task.value = text;
    const ourList = document.getElementById("task-list");
    ourList.append(task);
}
const done = (elmnt,number) => {
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