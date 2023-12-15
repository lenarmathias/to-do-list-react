import styled from "styled-components";

export const SectionTitle = styled.h2`
    font-weight: 700;
    font-size: 18px;
    margin: 0;
`;

export const SeparateContainer = styled.div`
    padding: 20px;
    border: 1px #f0f0f0 solid;
    background-color: #ffffff;
    box-shadow: 0 0 5px 0 #00000010;
`;

export const GridSeparateContainer = styled(SeparateContainer)`
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr auto ;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: none;
        grid-template-rows: repeat(2 1fr);
    }
`;