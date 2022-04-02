import { useState } from "react";
import HeaderText from "../../common/HeaderText/HeaderText";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import "./PersonalDetails.scss";

const title = "Welcome! First things first...";
const subtitle = "You can always change them later.";

const PersonalDetails = (props) => {
  const [fullName, setFullName] = useState(
    sessionStorage.getItem("fullName") || ""
  );
  const [displayName, setDisplayName] = useState(
    sessionStorage.getItem("displayName") || ""
  );

  const onSetFullName = (event) => {
    setFullName(event.target.value);
    sessionStorage.setItem("fullName", event.target.value);
  };

  const onSetDisplayName = (event) => {
    setDisplayName(event.target.value);
    sessionStorage.setItem("displayName", event.target.value);
  };

  return (
    <div className="personal-details-container">
      <HeaderText title={title} subtitle={subtitle} />
      <Input
        value={fullName}
        onChange={onSetFullName}
        label={"Full Name"}
        placeholder={"Steve Jobs"}
      />
      <Input
        value={displayName}
        onChange={onSetDisplayName}
        label={"Display Name"}
        placeholder={"Steve"}
      />
      <Button
        disabled={!fullName || !displayName}
        text="Create WorkSpace"
        onClick={props.onButtonClick}
      />
    </div>
  );
};

export default PersonalDetails;
