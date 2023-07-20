import { TaskList, ListItem, TaskButton, RemoveButton, DoneText } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <TaskList>
        {tasks.map(task => (
            <ListItem
                key={task.id}
                hidden={task.done && hideDone}
            >
                <TaskButton onClick={() => toggleTaskDone(task.id)}>
                    {task.done ? "✔" : ""}
                </TaskButton>
                <DoneText $done={task.done}>
                    {task.content}
                </DoneText>
                <RemoveButton onClick={() => removeTask(task.id)}>
                    🗑️
                </RemoveButton>
            </ListItem>
        ))}
    </TaskList>
);

export default Tasks;