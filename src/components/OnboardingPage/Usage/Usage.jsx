import { useState } from "react";
import SelfLogo from "../../../assets/self.JPG";
import TeamLogo from "../../../assets/team.JPG";
import HeaderText from "../../common/HeaderText/HeaderText";
import Button from "../../UI/Button/Button";
import "./Usage.scss";

const labels = {
  title: "How are you planning to use Eden?",
  subtitle: "We'll streamline your experience accordingly.",
  self: {
    title: "For Myself",
    subtitle: "Write better. Think more clearly. Stay organized.",
  },
  team: {
    title: "With my team",
    subtitle: "Wikis, docs, tasks & projects, all in one place.",
  },
};

const Usage = (props) => {
  const [user, setUser] = useState(+sessionStorage.getItem("user"));

  const onSetUser = (value) => {
    setUser(value);
    sessionStorage.setItem("user", value);
  };

  return (
    <div className="usage-container">
      <HeaderText title={labels.title} subtitle={labels.subtitle} />
      <div className="usage-user-type-container">
        <div
          className={"usage-user-type" + (user === 1 ? " selected" : "")}
          onClick={() => onSetUser(1)}
        >
          <img src={SelfLogo} alt="self" />
          <div className="usage-user-type-title">{labels.self.title}</div>
          <div className="usage-user-type-subtitle">{labels.self.subtitle}</div>
        </div>
        <div
          className={"usage-user-type" + (user === 2 ? " selected" : "")}
          onClick={() => onSetUser(2)}
        >
          <img src={TeamLogo} alt="team" />
          <div className="usage-user-type-title">{labels.team.title}</div>
          <div className="usage-user-type-subtitle">{labels.team.subtitle}</div>
        </div>
      </div>

      <Button
        disabled={!user}
        text="Create WorkSpace"
        onClick={props.onButtonClick}
      />
    </div>
  );
};

export default Usage;
