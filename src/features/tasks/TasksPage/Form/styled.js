import styled, { keyframes } from "styled-components";

export const FormField = styled.form`
    display: flex;
    flex-wrap: wrap;
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
        transition: none;

        &:hover {
            background-color: #008080;
            transform: none;
        }

        &:active {
            background-color: #008080;
            animation: ${keyframes`
                100% {
                    transform: scale(1.05);
                }
            `} 0.2s ease-in-out;
        }
    }
`;