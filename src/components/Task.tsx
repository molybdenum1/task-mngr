import { ITask } from "../interfaces/ITask";
import DropDown from "./DropDown";

const Task = ({task, setTaskList, taskList} : {task: ITask, setTaskList: any, taskList: ITask[]}) => {
    return ( 
        <div 
            draggable
            className="task"
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
                <DropDown task={task} setTaskList={setTaskList} taskList={taskList}/>
                <div>
                    <button className="btn btn-danger"
                    onClick={() => {
                       setTaskList([...taskList.filter(tsk => tsk.id !== task.id)]) 
                    }}
                    >Del</button>
                </div>
            </div>
        </div>
);
}
 
export default Task;