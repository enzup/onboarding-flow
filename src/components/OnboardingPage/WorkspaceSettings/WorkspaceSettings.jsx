import { useState } from "react";
import HeaderText from "../../common/HeaderText/HeaderText";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import "./WorkspaceSettings.scss";

const title = "Let's set up a home for all your work";
const subtitle = "You can always create another workspace later.";

const WorkspaceSettings = (props) => {
  const [workspaceName, setWorkspaceName] = useState(
    sessionStorage.getItem("workspaceName") || ""
  );
  const [workspaceUrl, setWorkspaceUrl] = useState(
    sessionStorage.getItem("workspaceUrl") || ""
  );

  const onSetWorkspaceName = (event) => {
    setWorkspaceName(event.target.value);
    sessionStorage.setItem("workspaceName", event.target.value);
  };

  const onSetWorkspaceUrl = (event) => {
    setWorkspaceUrl(event.target.value);
    sessionStorage.setItem("workspaceUrl", event.target.value);
  };

  return (
    <div className="workspace-settings-container">
      <HeaderText title={title} subtitle={subtitle} />
      <Input
        value={workspaceName}
        onChange={onSetWorkspaceName}
        label={"WorkSpace Name"}
        placeholder={"Eden"}
      />
      <Input
        value={workspaceUrl}
        onChange={onSetWorkspaceUrl}
        label={"WorkSpace URL"}
        sublabel={"(optional)"}
        inputPrefix="www.eden.com/"
        placeholder={"Eden"}
      />
      <Button
        disabled={!workspaceName || !workspaceUrl}
        text="Create WorkSpace"
        onClick={props.onButtonClick}
      />
    </div>
  );
};

export default WorkspaceSettings;
