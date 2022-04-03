import { useContext, useState } from "react";
import LabelContext from "../../../context/LabelContext";
import HeaderText from "../../common/HeaderText/HeaderText";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import "./PersonalDetails.scss";

const PersonalDetails = (props) => {
  const labels = useContext(LabelContext);
  const [fullName, setFullName] = useState(
    sessionStorage.getItem(labels.personalDetails.fullName.fieldName) || ""
  );
  const [displayName, setDisplayName] = useState(
    sessionStorage.getItem(labels.personalDetails.displayName.fieldName) || ""
  );

  const onSetFullName = (event) => {
    setFullName(event.target.value);
    sessionStorage.setItem(
      labels.personalDetails.fullName.fieldName,
      event.target.value
    );
  };

  const onSetDisplayName = (event) => {
    setDisplayName(event.target.value);
    sessionStorage.setItem(
      labels.personalDetails.displayName.fieldName,
      event.target.value
    );
  };

  return (
    <div className="personal-details-container">
      <HeaderText
        title={labels.personalDetails.title}
        subtitle={labels.personalDetails.subtitle}
      />
      <Input
        value={fullName}
        onChange={onSetFullName}
        label={labels.personalDetails.fullName.label}
        placeholder={labels.personalDetails.fullName.placeholder}
      />
      <Input
        value={displayName}
        onChange={onSetDisplayName}
        label={labels.personalDetails.displayName.label}
        placeholder={labels.personalDetails.displayName.placeholder}
      />
      <Button
        disabled={!fullName || !displayName}
        text={labels.personalDetails.buttonText}
        onClick={props.onButtonClick}
      />
    </div>
  );
};

export default PersonalDetails;
