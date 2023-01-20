document.querySelector('#push').onclick=function(){
    if(document.querySelector('#wrapper input').value.length==0){
        alert("Please Enter the task");
                
    }
    else{
        document.querySelector('#task').innerHTML+= ` 
        <div class="tasks">
            <span id="taskname">
                ${document.querySelector('#wrapper input').value}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
        `;
        
        let current_tasks=document.querySelectorAll('.delete');
        for(let i=0;i<current_tasks.length;i++){
            current_tasks[i].onclick=function(){
                this.parentNode.remove();
            }
        }
    }
}