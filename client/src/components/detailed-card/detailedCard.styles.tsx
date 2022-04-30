import styled from "styled-components";

export const RecipeCard = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin-left: 10%;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 100px 0 100px 0;

    h1 {
        text-align: center;

        span {
            font-size: 28px;
            color: #212529;
        }
    }
`;

export const RecipeCardBody = styled.div`
    padding: 20px;
`;
