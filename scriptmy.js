const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');


form.addEventListener("submit", addNewItem);
btnDeleteAll.addEventListener("click",deleteAllItems);
taskList.addEventListener("click", deleteItem);

function addNewItem(e){

 //create li 
 const li=document.createElement("li");
 li.className="list-group-item list-group-item-secondary";
 li.textContent=input.value;



 //create a

 const a=document.createElement("a");
 a.className="delete-item float-right";
 a.href="#";
 a.innerHTML = '<i class="fas fa-times"></i>';

 // add a to li
 li.appendChild(a);

 // add li to ul
 taskList.appendChild(li);

 // clear input
 input.value = '';



e.preventDefault();

}


function deleteAllItems(e){
  
    taskList.innerHTML="";



  e.preventDefault();
}



function deleteItem(e){
 
    if(e.target.className==="fas fa-times"){
        e.target.parentElement.parentElement.remove();
    }

   e.preventDefault();
}
