import { useState, useRef } from "react";
import { FormField, TaskInput, AddTaskButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        focusInput();
    };

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <FormField onSubmit={onFormSubmit}>
            <TaskInput
                ref={inputRef}
                value={newTaskContent}
                onChange={({ target }) => { setNewTaskContent(target.value) }}
                placeholder="Co jest do zrobienia?"
                autoFocus
            />

            <AddTaskButton>
                Dodaj zadanie
            </AddTaskButton>
        </FormField>
    );
};

export default Form;