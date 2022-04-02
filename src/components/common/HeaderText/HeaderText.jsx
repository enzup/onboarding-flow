import "./HeaderText.scss";

const HeaderText = (props) => {
  return (
    <div className="header-text-container">
      <div className="header-text-title">{props.title}</div>
      <div className="header-text-subtitle">{props.subtitle}</div>
    </div>
  );
};

export default HeaderText;
