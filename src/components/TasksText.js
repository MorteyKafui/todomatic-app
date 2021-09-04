export default function TasksText({ tasks }) {
  const tasksNoun = tasks.length !== 1 ? 'tasks' : 'task';

  if (tasks.length === 0) {
    return <h2>No Tasks Found!</h2>;
  } else {
    return (
      <h2 id='list-heading'>
        {tasks.length} {tasksNoun} remaining
      </h2>
    );
  }
}
