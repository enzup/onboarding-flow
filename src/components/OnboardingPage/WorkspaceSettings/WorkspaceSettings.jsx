import { useContext, useState } from "react";
import LabelContext from "../../../context/LabelContext";
import HeaderText from "../../common/HeaderText/HeaderText";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import "./WorkspaceSettings.scss";

const WorkspaceSettings = (props) => {
  const labels = useContext(LabelContext);
  const [workspaceName, setWorkspaceName] = useState(
    sessionStorage.getItem(labels.workspaceSettings.workspaceName.fieldName) ||
      ""
  );
  const [workspaceUrl, setWorkspaceUrl] = useState(
    sessionStorage.getItem(labels.workspaceSettings.workspaceUrl.fieldName) ||
      ""
  );

  const onSetWorkspaceName = (event) => {
    setWorkspaceName(event.target.value);
    sessionStorage.setItem(
      labels.workspaceSettings.workspaceName.fieldName,
      event.target.value
    );
  };

  const onSetWorkspaceUrl = (event) => {
    setWorkspaceUrl(event.target.value);
    sessionStorage.setItem(
      labels.workspaceSettings.workspaceUrl.fieldName,
      event.target.value
    );
  };

  return (
    <div className="workspace-settings-container">
      <HeaderText
        title={labels.workspaceSettings.title}
        subtitle={labels.workspaceSettings.subtitle}
      />
      <Input
        value={workspaceName}
        onChange={onSetWorkspaceName}
        label={labels.workspaceSettings.workspaceName.label}
        placeholder={labels.workspaceSettings.workspaceName.placeholder}
      />
      <Input
        value={workspaceUrl}
        onChange={onSetWorkspaceUrl}
        label={labels.workspaceSettings.workspaceUrl.label}
        sublabel={labels.workspaceSettings.workspaceUrl.subLabel}
        inputPrefix={labels.workspaceSettings.workspaceUrl.inputPrefix}
        placeholder={labels.workspaceSettings.workspaceUrl.placeholder}
      />
      <Button
        disabled={!workspaceName || !workspaceUrl}
        text={labels.workspaceSettings.buttonText}
        onClick={props.onButtonClick}
      />
    </div>
  );
};

export default WorkspaceSettings;
