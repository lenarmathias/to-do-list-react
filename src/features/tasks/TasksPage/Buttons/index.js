import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone, selectHideDone, selectAreTasksEmpty } from "../../tasksSlice";
import { ButtonsContainer, ActionButton } from "../styled";

const Buttons = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const tasksEmpty = useSelector(selectAreTasksEmpty);
    const dispatch = useDispatch();

    return (
        !tasksEmpty && (
            <ButtonsContainer>
                <ActionButton onClick={() => dispatch(toggleHideDone())}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </ActionButton>
                <ActionButton
                    onClick={() => dispatch(setAllDone())}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </ActionButton>
            </ButtonsContainer>
        )
    )
};

export default Buttons;