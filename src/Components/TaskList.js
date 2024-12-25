import TaskItems from "./TaskItems";
const TaskList = (props) => {
  console.log(props.data, "from tasklist");
  return (
    <>
      <h1>All Tasks</h1>
      <ul>
        {props.data.map((t) => (
          <TaskItems test={t} delete ={props.remove} key={Math.random()} />
        ))}
        {/* <TaskItems test={props.data}/> */}
      </ul>
    </>
  );
};
export default TaskList;
