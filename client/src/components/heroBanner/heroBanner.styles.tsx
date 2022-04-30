import styled from "styled-components";

export const Herobanner = styled.div`
    overflow: hidden;
    position: relative;
    width: 90%;
    margin: auto;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    before {
        content: "";
        width: 100%;
        height: 100%;
        background-color: aquamarine;
    }

    .heroBannerImg {
        width: 100%;
    }
`;

export const HeroBannerBody = styled.div`
    padding: 50px 0;
    display: flex;
`;

export const HeroBannerContent = styled.div`
    h1 {
        text-align: center;
        margin: 20px;
        font-weight: bold;
        color: #2e2d2d;
    }
    p {
        word-spacing: 5px;
        color: #ffffff;
    }
`;

export const BtnWrapper = styled.div`
    text-align: center;

    .recipeBtn {
        height: 75px;
        background-color: transparent;
        color: white;
        font-size: 20px;
        cursor: pointer;
        border: 4px solid white;
        border-radius: 100px;
        padding: 0px 10px;
        margin: 10px 0px;
        font-weight: bold;
        transition: all 0.3s ease-in-out;
        :hover {
            background-color: white;
            color: black;
            transform: scale(1.05);
        }
    }
`;
