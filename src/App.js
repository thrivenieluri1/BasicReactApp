import { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
const TASK_Array = ['React','Angular','Vue JS',"HTML","CSS"]
function App() {
  const [taskArray, setTaskArray] = useState(TASK_Array);
  // let someData = "Task list Data";
  // call back function
  const addDataToTask = (task) => {
    // console.log(task, "From App");
    setTaskArray([...taskArray,task]);
    console.log(taskArray)
  };
  const removeTask = (task) =>{
    const newTask = taskArray.filter(a => a !==task);
    setTaskArray(newTask)
  }
  return (
    <>
      <div className="App">
        <AddTask  getData={addDataToTask} />
        </div>
        <div className="App">
        <TaskList data={taskArray}  remove={removeTask}/>
      </div>
    </>
  );
}

export default App;
