import styled, { keyframes } from "styled-components";

export const FormField = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

export const AddTaskButton = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
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

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-basis: 100%;
        margin-top: 10px;
        margin-left: 0;
        transition: none;

        &:hover {
            background-color: ${({ theme }) => theme.colors.primary};
            transform: none;
        }

        &:active {
            background-color: ${({ theme }) => theme.colors.primary};
            animation: ${keyframes`
                100% {
                    transform: scale(1.05);
                }
            `} 0.2s ease-in-out;
        }
    }
`;