const taskinput = document.getElementById('input');
const tasklist = document.getElementById('li');
function addtask(){
    const task= taskinput.value;
    if(task){
        const list= document.createElement('list');
        list.innerHTML= `
        <span> ${task} </span>
        `;
        tasklist.appendChild(list);
        taskinput.value="";

    }
}