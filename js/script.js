'use strict';
var todoList = "";
var todoListObj = [];
function save() {
    var title = document.getElementById("todo-title").value;
    var description = document.getElementById("description").value;
    localStorage.setItem("todo-title", title);
    localStorage.setItem("description", description);

    // if (todoList.length <= 20) {
        for (let i = 0; i < 20; i++) {
            var rowData ="<tr><td>"+ title +"</td><td>"+ description +"</td><td id='removeItem()'> x </td></tr>";
            todoList += rowData;
    
            todoListObj.push({"title": title, "description": description});
            console.log(todoListObj);

            document.getElementById("todo-title").value = null;
            document.getElementById("description").value = null;
            document.getElementById("myTodoList").innerHTML = todoList;
            console.log(todoList);
            return;
        }
        // todoList += "</tbody>"; 
        // document.getElementById("myTodoList").innerHTML = todoList;  
        console.log(todoList);
        console.log(todoListObj);
    // }
    // else {
    //     document.getElementById("exceed20").innerHTML = "You can only add 20 items in your to-do list. You can only do so many things in a day. LOL!";
    // }
}
// function list () {
//     for (let i = 0; i < todoListObj.length; i++) {
//         var rowData ="<tr><td>"+ title +"</td><td>"+ description +"</td><td id='removeItem()'> x </td></tr>";
//         todoList += rowData;

//         todoListObj.push({"title": title, "description": description});
//         console.log(todoListObj);

//         document.getElementById("todo-title").value = null;
//         document.getElementById("description").value = null;
//         document.getElementById("myTodoList").innerHTML = todoList;
//         console.log(todoList);
//         return;
//     }
// }
// console.log(todoList + "Last Point");
// document.getElementById("myTodoList").innerHTML = todoList; 
// save();

// function cellFunc() {      
//     document.getElementById("why").innerHTML = "whoysbsj";
// }
// cellFunc();

// if(Object.keys(localStorage).length<5){
// //then add more items or whatever
// }

// console.log(todoList + "talk");
 
// function loadTitle() {
//     var title = localStorage.getItem("todo-title");
//     // document.getElementById("todo-title").value = title;
//     document.getElementById("title-item").innerHTML = title;
//     console.log(title);
// }
// function loadDescription() {
//     var description = localStorage.getItem("description");
//     // document.getElementById("description").value = description;
//     document.getElementById("description-item").innerHTML = description;
//     console.log(description);
// }
