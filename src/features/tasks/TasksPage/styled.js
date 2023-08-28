import styled, { css } from "styled-components";

export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: none;
        grid-template-rows: repeat(2, 1fr);
    }
`;

export const ActionButton = styled.button`
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
        filter: brightness(1.5);
    }

    &:active {
        filter: brightness(1.75);
    }

    &:disabled {
        color: #80808060;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        &:hover {
            filter: none;
        }

        &:active {
            filter: none;
        }

        &:disabled {
            color: #80808060;
        }
    }

    ${({ mobileMarginTop }) => mobileMarginTop && css`
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            margin-top: 20px;
        }
    `}
`;