import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
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
    display: grid;
    align-content: center;

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

export const ContentLink = styled(Link)`
    padding: 5px 10px;
    color: #008080;
    text-decoration: none;
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;