import { useContext, useState } from "react";
import SelfLogo from "../../../assets/self.JPG";
import TeamLogo from "../../../assets/team.JPG";
import LabelContext from "../../../context/LabelContext";
import HeaderText from "../../common/HeaderText/HeaderText";
import Button from "../../UI/Button/Button";
import "./Usage.scss";

const Usage = (props) => {
  const labels = useContext(LabelContext);
  const [user, setUser] = useState(
    +sessionStorage.getItem(labels.usage.fieldName)
  );

  const onSetUser = (value) => {
    setUser(value);
    sessionStorage.setItem(labels.usage.fieldName, value);
  };

  return (
    <div className="usage-container">
      <HeaderText title={labels.usage.title} subtitle={labels.usage.subtitle} />
      <div className="usage-user-type-container">
        <div
          className={"usage-user-type" + (user === 1 ? " selected" : "")}
          onClick={() => onSetUser(1)}
        >
          <img src={SelfLogo} alt="self" />
          <div className="usage-user-type-title">{labels.usage.self.title}</div>
          <div className="usage-user-type-subtitle">
            {labels.usage.self.subtitle}
          </div>
        </div>
        <div
          className={"usage-user-type" + (user === 2 ? " selected" : "")}
          onClick={() => onSetUser(2)}
        >
          <img src={TeamLogo} alt="team" />
          <div className="usage-user-type-title">{labels.usage.team.title}</div>
          <div className="usage-user-type-subtitle">
            {labels.usage.team.subtitle}
          </div>
        </div>
      </div>

      <Button
        disabled={!user}
        text={labels.usage.buttonText}
        onClick={props.onButtonClick}
      />
    </div>
  );
};

export default Usage;
