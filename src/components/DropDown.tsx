import Dropdown from 'react-bootstrap/Dropdown';
import { ITask } from '../interfaces/ITask';

const DropDown = ({task} : {task: ITask}) => {

    const statuses = ['TODO', 'In Proccess', 'Done']
    // const taskStatusHandler = (e: React.MouseEventHandler<HTMLButtonElement>) => {
    //     e.tar
    // }

    return ( 
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
         {task.status}
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          {
            statuses.map(status => (
                <Dropdown.Item onClick={(e) => {
                    task.status = e.currentTarget
                }}
                value={status}
                >{status}</Dropdown.Item>
            ))
          }
          
        </Dropdown.Menu>
      </Dropdown>
     );
}
 
export default DropDown;