import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";
import { List, ListItem, TaskButton, RemoveButton, DoneText } from "./styled";

const TaskList = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <ListItem
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <TaskButton onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? "✔" : ""}
                    </TaskButton>
                    <DoneText $done={task.done}>
                        {task.content}
                    </DoneText>
                    <RemoveButton onClick={() => dispatch(removeTask(task.id))}>
                        🗑️
                    </RemoveButton>
                </ListItem>
            ))}
        </List>
    )
};

export default TaskList;