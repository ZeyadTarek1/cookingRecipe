import styled from "styled-components";
import aboutBackground from "../../img/aboutBackground.jpg";

export const AboutBackground = styled.div`
    color: white;
    background: url("${aboutBackground}");
    background-repeat: no-repeat;
    background-size: cover;
    height: 900px;
    padding: 50px 50px;
    h1 {
        margin: 90px 30px;
    }
    h3 {
        margin: 30px;
    }
`;
