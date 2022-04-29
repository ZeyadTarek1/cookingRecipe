import { useEffect, useState } from "react";
import styled from "styled-components";

type ModInputProps = {
  label: string;
  name: string;
  value?: string;
  rows?: number;
  inputFunction: (value: string) => void;
};

const TextAreaInput = ({ label = "", value = "", name = "", rows = 5, inputFunction }: ModInputProps) => {
  const [fieldValue, setFieldValue] = useState<string>(value);

  const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    inputFunction(event.target.value);
    setFieldValue(event.target.value);
  };
  useEffect(() => {
    setFieldValue(value);
  }, [value]);
  return (
    <div>
      <StyledModLabel htmlFor={name}>{label}</StyledModLabel>
      <StyledTextArea name={name} value={fieldValue} rows={rows} required onChange={changeHandler}></StyledTextArea>
    </div>
  );
};

export default TextAreaInput;

const StyledModLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 400;
  color: #595f6e;
`;

const StyledTextArea = styled.textarea`
  background-color: transparent;
  border: none;
  color: white;
  font-weight: 400;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  border-bottom: 1px solid rgba(169, 175, 187, 0.25) !important;
  width: 100%;
  outline: none;
`;
