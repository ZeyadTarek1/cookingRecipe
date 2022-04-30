import cookingBackground from "../../img/background1.jpg";
import styled from "styled-components";

export const CardHome = styled.div`
    padding: 50px 10%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px 30px;
`;

export const HomeContainer = styled.div`
    background: url("${cookingBackground}");
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 50px;
`;
