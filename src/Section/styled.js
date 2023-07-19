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
    box-shadow: 0px 0px 5px 0px #00000010;
`;

export const GridSeparateContainer = styled(SeparateContainer)`
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr auto ;

    @media (max-width: 767px) {
        grid-template-columns: none;
        grid-template-rows: repeat(2 1fr);
    }
`;