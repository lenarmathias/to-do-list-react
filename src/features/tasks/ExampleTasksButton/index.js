import { useDispatch } from "react-redux";
import { addExampleTasks } from "../tasksSlice";
import { ActionButton } from "../styled";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();

    return (
        <ActionButton
            title="Aktualne zadania zostaną usunięte"
            onClick={() => dispatch(addExampleTasks())}
        >
            Pobierz przykładowe zadania
        </ActionButton>
    )
};

export default ExampleTasksButton;