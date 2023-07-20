import styled, { css } from "styled-components";

export const TaskList = styled.ul`
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
`;

export const ListItem = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    border-bottom: 2px #f0f0f0 solid;
    margin-top: 20px;
    padding: 0 10px 10px;

    &:first-child {
        margin-top: 0;
    }

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const TaskButton = styled.button`
    width: 28px;
    height: 28px;
    color: #ffffff;
    border: none;
    background-color: #008000;
    transition: 1s;

    &:hover {
        background-color: #00be00;
    }
`;

export const RemoveButton = styled(TaskButton)`
    background-color: #ff0000;

    &:hover {
        background-color: #ff8a8a;
    }
`;

export const DoneText = styled.span`
    padding: 5px 10px;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;