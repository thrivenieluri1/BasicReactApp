const TaskItems = (props) => {
  const handleDelete = (taskToDelete) => {
    // e.preventDefault(taskToDelete);
    props.delete(taskToDelete)
  };
  return (
    <>
      <li>{props.test} 
      <button onClick={e=>handleDelete(props.test)}>Delete</button>
      </li>
    </>
  );
};
export default TaskItems;
