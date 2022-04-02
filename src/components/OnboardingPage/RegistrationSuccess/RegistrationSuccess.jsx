import Check from "../../../assets/check.png";
import HeaderText from "../../common/HeaderText/HeaderText";
import Button from "../../UI/Button/Button";
import "./RegistrationSuccess.scss";

const labels = {
  title: "Congratulations,",
  subtitle: "You have completed onboarding, you can start using Eden!",
};

const RegistrationSuccess = () => {
  const onButtonClick = () => {
    alert("Success: " + JSON.stringify(sessionStorage));
  };

  return (
    <div className="reg-success-container">
      <div className="reg-success-check-container">
        <img src={Check} alt="check" />
      </div>
      <HeaderText
        title={labels.title + " " + sessionStorage.getItem("displayName") + "!"}
        subtitle={labels.subtitle}
      />
      <Button text="Launch Eden" onClick={onButtonClick} />
    </div>
  );
};

export default RegistrationSuccess;
