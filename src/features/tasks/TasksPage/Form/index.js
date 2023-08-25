import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { FormField, AddTaskButton } from "./styled";
import Input from "../Input/styled"
import { addTask } from "../../tasksSlice";

const Form = () => {
    const dispatch = useDispatch();

    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

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
            <Input
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