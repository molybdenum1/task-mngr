
import Dropdown from 'react-bootstrap/Dropdown';
import { ITask } from '../interfaces/ITask';

const DropDown = ({task, setTaskList, taskList} : {task: ITask, setTaskList: any, taskList: ITask[]}) => {

    const statuses = ['TODO', 'In Proccess', 'Done'];

    // console.log(task);
    
    return ( 
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
         {task.status}
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          {
            statuses.map(status => (
                <Dropdown.Item
                key={Math.random()*10} 
                onClick={(e) => {
                    taskList.filter(tsk => task.id === tsk.id)[0].status = e.currentTarget.innerHTML 
                    setTaskList([...taskList])
                }}
                value={status}>
                    {status}
                </Dropdown.Item>
            ))
          }
          
        </Dropdown.Menu>
      </Dropdown>
     );
}
 
export default DropDown;