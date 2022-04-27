import "./input.css";

type AppProps = {
    label: string;
    name: string;
    type: string;
    inputFunction: Function;
};

const Input = ({ label, name, type, inputFunction }: AppProps) => {
    return (
        <div className="inputContainer">
            <input
                type={type}
                name={name}
                id={name}
                required
                onChange={() => inputFunction()}
            />
            <label htmlFor={name} className="input-label">
                <span className="contentName">{label}</span>
            </label>
        </div>
    );
};
export default Input;
