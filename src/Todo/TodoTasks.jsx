import { MdCheck, MdDeleteForever } from "react-icons/md";
export const TodoTasks=({data,checked, onHandleDeleteTodo,onHandleCheckedTodo})=>{
    return <> <li>
                        <span className={checked?"checkList":"notcheckList"}>{data}</span>
                        <section className='lists'>
                        <button  onClick={()=>{onHandleCheckedTodo(data)} }className='tick-btn' >
                        <MdCheck />
                        </button>
                        <button  className='delete-btn' onClick={()=>{onHandleDeleteTodo(data)}}>
                        <MdDeleteForever />
                        </button>
                        </section>
                    </li>
                    </>
}