import styled from "styled-components";

export const FormField = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

export const TaskInput = styled.input`
    flex-grow: 1;
    height: 38.4px;
    border: 1px #e0e0e0 solid;
    padding: 10px;
`;

export const AddTaskButton = styled.button`
    border: none;
    background-color: #008080;
    font-family: "Montserrat", sans-serif;
    color: #ffffff;
    padding: 10px;
    margin-left: 20px;
    transition: 1s;

    &:hover {
        background-color: #00a1a1;
        transform: scale(1.1);
    }

    &:active {
        background-color: #00b6b6;
    }

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin-top: 10px;
        margin-left: 0;
    }
`;