import {useState} from 'react';
import './Todolist.css'
import { TodoForm } from './TodoForm';
import { TodoTasks } from './TodoTasks';
import { TodoDate } from './TodoDate';
import { setLocalStorageTodoData,getLocalStorageTodoData} from './LocalStorage';



export const Todo=()=>{
const [listvalue,setListvalue]=useState(()=>getLocalStorageTodoData());

const handleSubmit=(inputvalue)=>{
    const {id,content,checked}=inputvalue;
    if(!content) return;
    // if(listvalue.includes(inputvalue)) {
    //     return;
    // }
        const ifTodoContentMatched=listvalue.find((curTask)=>{return curTask.content===content});
        if(ifTodoContentMatched) return;
    setListvalue((prevList)=>[...prevList,{id,content,checked}]);
}

setLocalStorageTodoData(listvalue);

const handleDel=(value)=>{
    const updateList=listvalue.filter((cur)=>cur.content!==value);
    setListvalue(updateList);

}
const handleClearall=()=>{
   setListvalue([]);
}
const handleChecked=(taskk)=>{
const updatedTick=listvalue.map((curTaskk)=>{
    if(curTaskk.content===taskk){
        return {...curTaskk,checked:!curTaskk.checked}
    }
    else{
        return curTaskk;
    }
});
setListvalue(updatedTick);
}

return <>
<section className='todo-container'>
<header>
    <h1>Todo List</h1>
    <TodoDate/>
    </header>
<TodoForm onAddTodo={handleSubmit}/>
    <section className='unlist'>
        <ul>
            {
                listvalue.map((cur)=>{
                    return (
                        <TodoTasks key={cur.id} data={cur.content} 
                        checked={cur.checked}
                        onHandleDeleteTodo={handleDel} 
                        onHandleCheckedTodo={handleChecked}

                    />
                    )
                })
            
            }
        </ul>

    </section>
    <section>
        <button className='clearall' onClick={handleClearall}>Clear All</button>
    </section>
   
</section>
</>
}