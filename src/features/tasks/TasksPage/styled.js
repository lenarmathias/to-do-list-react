import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        margin-top: 10px;
        grid-template-columns: none;
        grid-template-rows: repeat(2, 1fr);
    }
`;

export const ActionButton = styled.button`
    border: none;
    background: none;
    color: #008080;

    &:hover {
        color: #00a1a1;
    }

    &:active {
        color: #00b6b6;
    }

    &:disabled {
        color: #80808060;
    }
`;