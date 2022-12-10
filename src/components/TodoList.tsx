import { useState } from "react";
import CreateTask from "../modals/CreateTask";

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    const toggle = (): void => setModal(!modal);

    const saveTask = (task) => {
        let tmp = taskList;
        tmp.push(task);
        setTaskList(tmp)
    } 
    console.log(taskList);
    
    return ( 
        <>
            <div className="header text-center">
                <h3>Todo List</h3>
                <button className="btn btn-primary mt-2"
                    onClick={() => setModal(true)}
                >Create task</button>
            </div>
            <div className="task-container">

            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
        </>
     );
}
 
export default TodoList;

interface ITask {
    id: string;
    name: string;
    desc: string;
}