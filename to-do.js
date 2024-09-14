//adding the written tasks

let add_btn=document.getElementsByClassName('add')[0];
let task_box=document.getElementsByClassName('input_tsk')[0];
let tasks=document.getElementsByClassName('tasks')[0];
add_btn.addEventListener('click',function(){
    if(task_box.value!==''){
        let task_container=document.createElement('div');//to hold the whole task
        let circle=document.createElement('img');// not yet icon
        let dlt=document.createElement('img');
        let contents=document.createElement('div');
        contents.textContent=task_box.value;
        circle.src='circle.png';
        circle.setAttribute('class','circle_cls');
        dlt.src='cross-button.png';
        dlt.setAttribute('class','delete');
        task_container.setAttribute('class','tsk_contain');
        task_container.appendChild(circle);
        task_container.appendChild(contents);
        task_container.appendChild(dlt);
        //2- we add the task to the task section
        tasks.appendChild(task_container);
        task_box.value='';

        //3- we remove the tasks
        dlt.addEventListener('click',function(){
            task_container.classList.add('hide');
        })

        // 4- we mark the task as done
        circle.addEventListener('click',function(){
            contents.classList.toggle('linethrough');
            let source=circle.src;
            if(source.includes('circle.png')){
                circle.src='check.png';
            }
            else{
                circle.src='circle.png';
            }
            
        })


    }
})

task_box.addEventListener('focus',function(){
    this.style.cssText='border:none;'
})


  