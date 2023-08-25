import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { FormField, TaskInput, AddTaskButton } from "./styled";
import { addTask } from "../../tasksSlice";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        dispatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),            
        }));
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