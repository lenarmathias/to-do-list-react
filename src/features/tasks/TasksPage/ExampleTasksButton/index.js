import { useSelector, useDispatch } from "react-redux";
import { selectTasks, fetchExampleTasks } from "../../tasksSlice";
import { ActionButton } from "../styled";

const ExampleTasksButton = () => {
    const { exampleTasksLoading } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <ActionButton
            title="Aktualne zadania zostaną usunięte"
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={exampleTasksLoading}
        >
            {
                exampleTasksLoading
                    ? "Ładowanie..."
                    : "Pobierz przykładowe zadania"
            }
        </ActionButton>
    )
};

export default ExampleTasksButton;