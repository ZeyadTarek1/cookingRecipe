import { useEffect, useState } from "react";
import styled from "styled-components";

type StylesProps = {
    color?: string;
    image?: string;
};

type ModInputProps = {
    label: string;
    name: string;
    type?: string;
    style: StylesProps;
    initalImage?: string;
    inputFunction: (file: File) => void;
};

const FileInput = ({
    label = "",
    name = "",
    initalImage = "",
    inputFunction,
}: ModInputProps) => {
    const [fileName, setFileName] = useState(label);
    const [file, setFile] = useState<File>(new File([], "#@#"));
    const [preview, setPreview] = useState<string>(initalImage);

    const uploadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        inputFunction(target.files![0]);
        setFile(target.files![0]);
        let temp = target.value.split("\\");
        setFileName(temp[temp.length - 1]);
    };

    useEffect(() => {
        if (file.name == "#@#") {
            setPreview(initalImage);
            return;
        }
        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl);
    }, [file, initalImage]);

    return (
        <StyledModInputContainer image={preview}>
            <StyledModInputFile>
                <input
                    type="file"
                    name={name}
                    required={initalImage ? false : true}
                    onChange={uploadHandler}
                />
                <DisplayedArea className={preview !== "" ? "hidden" : ""}>
                    {/* <AiOutlineCloudUpload />  */} {fileName}
                </DisplayedArea>
            </StyledModInputFile>
        </StyledModInputContainer>
    );
};

export default FileInput;

const StyledModInputContainer = styled.label<StylesProps>`
    &:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background: url(${(props) => (props.image ? props.image : "")});
        background-repeat: no-repeat;
        background-size: cover;
        transition: all 0.3s ease-in-out;
    }
    position: relative;
    border: 5px dashed grey;
    color: grey;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .hidden {
        opacity: 0;
        transition: all 0.2s ease-in-out;
        color: white;
    }

    &:hover {
        &:before {
            opacity: 20%;
        }
        .hidden {
            opacity: 1;
        }
    }
`;

const StyledModInputFile = styled.div`
    input[type="file"] {
        display: none;
    }
    border-radius: 3px;
    display: inline-block;
    padding: 6px 12px;
`;

const DisplayedArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    svg {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }
`;
