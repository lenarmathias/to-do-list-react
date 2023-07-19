import { useState } from "react";
import { FormField, TaskInput, AddTaskButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <FormField onSubmit={onFormSubmit}>
            <TaskInput
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