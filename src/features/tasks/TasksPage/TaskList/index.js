import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { List, ListItem, TaskButton, RemoveButton, Content, ContentLink } from "./styled";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

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
                    <ContentLink to={`/zadania/${task.id}`}>
                        <Content done={task.done}>
                            {task.content}
                        </Content>
                    </ContentLink>
                    <RemoveButton onClick={() => dispatch(removeTask(task.id))}>
                        🗑️
                    </RemoveButton>
                </ListItem>
            ))}
        </List>
    )
};

export default TaskList;