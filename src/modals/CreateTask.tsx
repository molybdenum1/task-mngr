import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {useState} from 'react';

const CreateTask = ({modal, toggle, save} : {modal: boolean, toggle: React.MouseEventHandler<HTMLButtonElement> | undefined, save: VoidFunction}) => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const name= e.target.name;
        const value = e.target.value;
        if(name === 'taskName'){ 
            setName(value)
        }else{ 
            setDesc(value)
        }
    }

    const handleSave  = () => {
        let taskObj = {
            name, desc
        }
        save(taskObj);
        toggle()
    }
    
    return ( 
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Create Task</ModalHeader>
          <ModalBody>
            <form>
                <div className='form-group'>
                    <label>Task Name</label>
                    <input type="text"
                    name='taskName'
                    onChange={handleChange}
                    className='form-control' 
                    value={name} />
                </div>
                <div className='form-group'>
                    <label>Task Description</label>
                    <textarea 
                    name='taskDesc'
                    onChange={handleChange}
                    value={desc} 
                    className='form-control'></textarea>
                </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
     );
}
 
export default CreateTask;