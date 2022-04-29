import styled from "styled-components";

type ModInputProps = {
    text?: string;
    submitFunction?: Function;
};

const GradientButton = ({
    text = "submit",
    submitFunction = () => {},
}: ModInputProps) => {
    return (
        <StyledModSubmitButton
            type="submit"
            value={text}
            onClick={() => submitFunction()}
        >
            {text}
        </StyledModSubmitButton>
    );
};

export default GradientButton;

const StyledModSubmitButton = styled.button`
    float: right;
    background-image: linear-gradient(60deg, #18c2e7, #43b1ae);
    cursor: pointer;
    position: relative;
    padding: 12px 30px;
    margin: 0.3125rem 1px;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.428571;
    text-decoration: none;
    outline: none;
    text-transform: uppercase;
    border: none;
    border-radius: 3px;
    color: white;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
`;
