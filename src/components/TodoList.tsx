import { useState } from "react";
import CreateTask from "../modals/CreateTask";
import { ITask } from "../interfaces/ITask";
import DropDown from "./DropDown";

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    const toggle = (): void => setModal(!modal);

    const saveTask = (task: ITask): void => {
        let tmp: ITask[] | any = [...taskList];
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
                {
                    taskList && taskList.map((task: ITask) => (
                        <div className="task"
                            style={
                            (task.status === 'TODO' &&  {backgroundColor:'#B6E2A1'}) ||
                            (task.status === 'In Proccess' &&  {backgroundColor:'#EF9A53'}) ||
                            (task.status === 'Done' &&  {backgroundColor:'#DD5353'}) ||
                            {backgroundColor: 'white'}
                            }
                        >
                            <div className="task-title">
                                {task.name}
                            </div>
                            <div className="task-desc">
                                {task.desc}
                            </div>
                            <div className="task-footer">
                                <DropDown task={task}/>
                                <div>
                                    <button className="btn btn-danger">Del</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
        </>
     );
}
 
export default TodoList;

