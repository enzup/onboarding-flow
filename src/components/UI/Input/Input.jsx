import "./Input.scss";

const Input = (props) => {
  const getInput = () => {
    return (
      <input
        className={"input-field" + (props.inputPrefix ? " prefix" : "")}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    );
  };

  const getInputWithPrefix = () => {
    return (
      <div className="input-field-with-prefix">
        <div className="prefix-box">{props.inputPrefix}</div>
        {getInput()}
      </div>
    );
  };

  return (
    <div className="input-container">
      <label className="input-label">
        {props.label}
        {props.sublabel && (
          <span className="input-label-sublabel">{props.sublabel}</span>
        )}
      </label>
      {props.inputPrefix ? getInputWithPrefix() : getInput()}
    </div>
  );
};

export default Input;
