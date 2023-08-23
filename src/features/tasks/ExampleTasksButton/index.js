import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";
import { ActionButton } from "../styled";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();

    return (
        <ActionButton
            title="Aktualne zadania zostaną usunięte"
            onClick={() => dispatch(fetchExampleTasks())}
        >
            Pobierz przykładowe zadania
        </ActionButton>
    )
};

export default ExampleTasksButton;