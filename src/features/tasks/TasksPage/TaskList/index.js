import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { List, ListItem, TaskButton, RemoveButton, Content, ContentLink } from "./styled";
import { FaTrashAlt, FaCheck } from "react-icons/fa";

const TaskList = ({ query }) => {
    const dispatch = useDispatch();

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    return (
        <List>
            {tasks.map(task => (
                <ListItem
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <TaskButton onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? <FaCheck /> : ""}
                    </TaskButton>
                    <ContentLink to={`/zadania/${task.id}`}>
                        <Content done={task.done}>
                            {task.content}
                        </Content>
                    </ContentLink>
                    <RemoveButton onClick={() => dispatch(removeTask(task.id))}>
                        <FaTrashAlt />
                    </RemoveButton>
                </ListItem>
            ))}
        </List>
    )
};

export default TaskList;