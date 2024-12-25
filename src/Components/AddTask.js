import { useState } from "react";


const AddTask = (props) => {
// hooks
    const[task, setTask]=useState("")
    // let task ="react"
  const handleButton = (e) => {
    e.preventDefault();
    if(task.trim()){
        props.getData(task)
        setTask('')
    }    
    // console.log(task)
  };
  const handleInput = (e) => {
    setTask(e.target.value);
  };
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Add a new task"
          onChange={handleInput}
          value={task}
        />
        <button type="submit" onClick={handleButton}>
          Add Task
        </button>
      </form>

    </>
  );
};
export default AddTask;
