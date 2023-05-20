import React, {useState} from 'react'



const List = () => {
    
    const [taskList, setTaskList] = useState([])
    const [completedTasksIndexes, setCompletedTasksIndexes] = useState([])

    const addTask = () => {
        const element = document.getElementById("task-input")
        const value = element.value
        const newTaskList = [...taskList, value]
        setTaskList(newTaskList)
        element.value = ""
    }

    const deleteTask = (currentIndex) => {
        const newArray = [...taskList]
        newArray.splice(currentIndex, 1)
        setTaskList(newArray)
    }

    const taskToggle = (currentIndex) => {
        const completedTasks = [...completedTasksIndexes];
        const index = completedTasks.indexOf(currentIndex);
        if (index >= 0) {
          completedTasks.splice(index, 1);
        } else {
          completedTasks.push(currentIndex);
        }  
        setCompletedTasksIndexes(completedTasks)
      }

    //   const inputElement = document.getElementById('task-input')
    //   inputElement.addEventListener('keydown', enterTask)
      
    //   const enterTask = (event) => {
    //     if (event.keyCode === 13) {
    //         addTask()
    //     }
    //   }
      
    // const taskToggle = (currentIndex) => {
    //     const isTaskCompleted = isCompleted(currentIndex)
    //     if (isTaskCompleted) {
    //     const newArray = [...completedTasksIndexes]
    //     newArray.splice(currentIndex, 1)
    //     setCompletedTasksIndexes(newArray)
    //     } else {
    //         const newCompletedTasks = [...completedTasksIndexes, currentIndex]
    //         setCompletedTasksIndexes(newCompletedTasks)
    //     }
    // } 
    
    const isCompleted = (currentIndex) => {
        return completedTasksIndexes.indexOf(currentIndex) >= 0
    }

    return (
    <div className='wrapper'>
        <div className="addTask">
            <h1>Daily Task List</h1>
            <input id="task-input" className="newTask" type="text" name="newTask" placeholder='Enter new task here...'/>
            <br />
            <button className="addButton" onClick={addTask}>ADD</button>
        </div>
        <div className="taskList">
            <h2>TASK LIST</h2>
            {taskList.map((task, index) => {
                return (<div>
                <p className='listText' style={{
                    textDecoration: isCompleted(index) ? "line-through" : null, display:"inline", 
                    fontSize: "18pt",
                    color: 'black',
                    marginRight: "20px"
                }}>{task}</p>
                <input className= "checkBox" type="checkbox" onChange={() => taskToggle(index)} />
                <button className="deleteButton" onClick={() => deleteTask(index)}>DELETE</button>
            </div>)
            })}
        </div>

    </div>
  )
}

export default List