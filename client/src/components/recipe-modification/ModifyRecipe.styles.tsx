import styled from "styled-components";

type ModifyRecipeContainerProps = {
    backgroundImage: string;
};

export const ModifyRecipeContainer = styled.div<ModifyRecipeContainerProps>`
    background: url("${(props) => props.backgroundImage}");
    background-repeat: no-repeat;
    background-size: cover;

    .ingredients {
        padding: 1.5rem 50px 1.25rem;
    }
`;

export const ModifyRecipeForm = styled.div`
    padding: 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormCard = styled.form`
    min-width: 750px;
    display: flex;
    flex-direction: column;
    background-color: #2f363e;
    border-radius: 12px;
`;

export const FormCardHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #3e454d;
    padding: 1.5rem 1.875rem 1.25rem;
    color: white;
    border-radius: calc(0.75rem - 1px) calc(0.75rem - 1px) 0 0;
    h4 {
        font-size: 20px;
        font-weight: 500;
        text-transform: capitalize;
    }
`;

export const FormCardBody = styled.div`
    padding: 1.5rem 50px 1.25rem;
    display: flex;
    justify-content: space-between;
`;
