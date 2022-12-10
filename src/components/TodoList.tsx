import { useState } from "react";
import CreateTask from "../modals/CreateTask";
import { ITask } from "../interfaces/ITask";

import Task from "./Task";

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    const toggle = (): void => setModal(!modal);

    const saveTask = (task: ITask): void => {
        let tmp: ITask[] | any = [...taskList];
        tmp.push(task);
        setTaskList(tmp)
    } 
    // console.log(taskList);
    
    return ( 
        <>
            <div className="header text-center">
                <h3>Todo List</h3>
                <button className="btn btn-primary mt-2"
                    onClick={() => setModal(true)}
                >Create task</button>
            </div>
            <div className="task-container">
                {
                    taskList && taskList.map((task: ITask) => (
                        <Task key={task.id} task={task} setTaskList={setTaskList} taskList={taskList}/>
                    ))
                }
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
        </>
     );
}
 
export default TodoList;

