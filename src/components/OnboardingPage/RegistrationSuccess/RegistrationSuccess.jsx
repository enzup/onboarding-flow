import { useContext } from "react";
import Check from "../../../assets/check.png";
import LabelContext from "../../../context/LabelContext";
import HeaderText from "../../common/HeaderText/HeaderText";
import Button from "../../UI/Button/Button";
import "./RegistrationSuccess.scss";

const RegistrationSuccess = () => {
  const labels = useContext(LabelContext);
  const displayName = sessionStorage.getItem(
    labels.personalDetails.displayName.fieldName
  );

  const onButtonClick = () => {
    alert("Success: " + JSON.stringify(sessionStorage));
  };

  return (
    <div className="reg-success-container">
      <div className="reg-success-check-container">
        <img src={Check} alt="check" />
      </div>
      <HeaderText
        title={labels.registrationSuccess.title + " " + displayName + "!"}
        subtitle={labels.registrationSuccess.subtitle}
      />
      <Button
        text={labels.registrationSuccess.buttonText}
        onClick={onButtonClick}
      />
    </div>
  );
};

export default RegistrationSuccess;
