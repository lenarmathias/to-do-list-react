import { List, ListItem, TaskButton, RemoveButton, DoneText } from "./styled";

const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
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
    </List>
);

export default TaskList;