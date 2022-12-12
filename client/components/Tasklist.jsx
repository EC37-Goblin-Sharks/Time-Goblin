import React, {useState} from 'react';

function TaskList (props) {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    function handleAdd() {
        // console.log('clicked add');
        setTaskList( oldTasks => {
            return [...oldTasks, task];
        })
        setTask('');
        // console.log(taskList)
    }

    function handleInput(event) {
        const {name, value} = event.target;
        setTask(value)
    }

    function handleDelete(event) {
        const {id} = event.target
        setTaskList( tasks => {
            return tasks.filter( (value, index) => {
                return Number(id) !== index;
            })
        })
        event.preventDefault();
    }

    return (
        <div> 
            <section>
            <table className='taskTable'> 
            <tr className='tableHeaders'>
                <th>#</th>
                <th>Task</th>
                <th>Edit</th>
            </tr>
            {taskList.map( (taskItem, index) => {
                return (
                    <tr>
                    <td>{index+1}</td>
                    <td className='taskItem'>
                        <div 
                            className='taskName'
                            id={index}
                            key={index}
                            >{taskItem}
                        </div>
                    </td>
                        <td className='editBtn'><button className='deleteBtn' id={index} onClick={handleDelete}>-</button></td>
                    </tr>
                )
            })}
            <tr>
                <td></td>
                <td><input className='taskInput' onChange={handleInput} name='newTask' placeholder='Input Task' value={task}></input></td>
                <td><button className='addBtn' onClick={handleAdd}>+</button></td>
            </tr>
                </table>
            </section>
        </div>
    )
}


export default TaskList;