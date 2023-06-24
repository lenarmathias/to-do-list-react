import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`tasks__tasksListItem${task.done && hideDone
                    ? " tasks--hidden"
                    : ""}`
                }
            >
                <button
                    onClick={() => toggleTaskDone(task.id)}
                    className="tasks__button"
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={`tasks__listItemText${task.done ? " tasks__textDone" : ""}`}>
                    {task.content}
                </span>
                <button
                    onClick={() => removeTask(task.id)}
                    className="tasks__button tasks__button--delete"
                >
                    🗑️
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;