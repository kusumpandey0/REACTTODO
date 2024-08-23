import { useState } from "react";
export const TodoForm=({onAddTodo})=>{
    const [inputvalue,setInputvalue]=useState({});
    const handleInput=(value)=>{
        setInputvalue({id:value, content:value, checked:false});
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        onAddTodo(inputvalue);
        setInputvalue({id:"", content:"", checked:false}); 

    }
    return (
        <>
            <section className='form-container'>
<form className='form' onSubmit={handleSubmit}>
    <div>
    <input className='todo-input' type='text' value={inputvalue.content} placeholder="enter the objects" autoComplete='off' onChange={(event)=>handleInput(event.target.value)} />
    </div>
    <div>
    <button className='todo-btn' type='submit' >Add Task</button>
    </div>
    </form>
    </section>
        </>
    )
}