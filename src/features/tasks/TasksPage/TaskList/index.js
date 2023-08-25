import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../../tasksSlice";
import { List, ListItem, TaskButton, RemoveButton, Content } from "./styled";
import { Link } from "react-router-dom";

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
                    <Content $done={task.done}>
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
                    </Content>
                    <RemoveButton onClick={() => dispatch(removeTask(task.id))}>
                        🗑️
                    </RemoveButton>
                </ListItem>
            ))}
        </List>
    )
};

export default TaskList;