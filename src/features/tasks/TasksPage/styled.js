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
        color: #00a1a1;
    }

    &:active {
        color: #00b6b6;
    }

    &:disabled {
        color: #80808060;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        &:hover {
            color: ${({ theme }) => theme.colors.primary};
        }

        &:active {
            color: ${({ theme }) => theme.colors.primary};
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