import "./style.css";

const Tasks = ({tasks, hiddenDoneTasks}) => (
    <ul className="tasks__tasksList">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`tasks__tasksListItem${task.done && hiddenDoneTasks
                    ? " tasks--hidden"
                    : ""}`
                }
            >
                <button className={`tasks__buttons`}>
                    {task.done ? "✔" : ""}
                </button>
                <span className={`tasks__listItemText${task.done ? " tasks__textDone" : ""}`}>
                    {task.content}
                </span>
                <button className={`tasks__buttons tasks__buttons--delete`}>
                    🗑️
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;