import { useEffect, useState } from "react";
import styled from "styled-components";

type StylesProps = {
    textColor?: string;
    activeLineColor?: string;
};

type ModInputProps = {
    label: string;
    name: string;
    type?: string;
    value?: string;
    style: StylesProps;
    inputFunction: (value: string) => void;
};

const TypeInput = ({
    label = "",
    name = "",
    value = "",
    type = "text",
    style,
    inputFunction,
}: ModInputProps) => {
    const [fieldValue, setFieldValue] = useState<string>(value);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        inputFunction(event.target.value);
        setFieldValue(event.target.value);
    };

    useEffect(() => {
        setFieldValue(value);
    }, [value]);
    return (
        <StyledInputContainer>
            <StyledInput
                type={type}
                name={name}
                value={fieldValue}
                required
                onChange={changeHandler}
                textColor={style.textColor}
            />
            <StyledLabel
                htmlFor={name}
                className="content-label"
                activeLineColor={style.activeLineColor}
            >
                <span className="content-name">{label}</span>
            </StyledLabel>
        </StyledInputContainer>
    );
};

export default TypeInput;

const StyledInputContainer = styled.div`
    position: relative;
    height: 50px;
    overflow: hidden;
    max-width: 200px;

    margin-bottom: 1rem;
    .content-name {
        position: absolute;
        bottom: 5px;
        left: 0px;
        color: #595f6e;
        font-size: 16px;
        transition: all 0.3s ease;
    }
    input:focus + .content-label .content-name,
    input:valid + .content-label .content-name {
        font-size: 12px;
        transform: translateY(-150%);
    }
    input:focus + .content-label::after,
    input:valid + .content-label::after {
        transform: translateX(0%);
    }
`;

const StyledInput = styled.input<StylesProps>`
    width: 100%;
    height: 100%;
    font-family: "Roboto", sans-serif;
    color: ${(props) =>
        props.textColor !== undefined ? props.textColor : "palevioletred"};
    padding-top: 20px;
    border: none;
    outline: none;
    background-color: transparent;
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

const StyledLabel = styled.label<StylesProps>`
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid rgba(169, 175, 187, 0.25);
    &:after {
        content: "";
        position: absolute;
        bottom: -1px;
        left: 0px;
        width: 100%;
        height: 100%;
        border-bottom: 2px solid
            ${(props) =>
                props.activeLineColor !== undefined
                    ? props.activeLineColor
                    : "palevioletred"};
        transform: translateX(-105%);
        transition: all 0.3s ease;
    }
`;
