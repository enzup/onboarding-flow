import { useState } from "react";
import logo from "../../assets/logo.JPG";
import PageTracker from "../common/PageTracker/PageTracker";
import "./OnboardingPage.scss";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import RegistrationSuccess from "./RegistrationSuccess/RegistrationSuccess";
import Usage from "./Usage/Usage";
import WorkspaceSettings from "./WorkspaceSettings/WorkspaceSettings";

const OnboardingPage = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="ob-page-container">
      <div className="ob-page-header">
        <img className="ob-page-header-logo" src={logo} alt="logo"></img>
        <div className="ob-page-header-title">Eden</div>
      </div>
      <PageTracker
        currentPage={page}
        onPageChange={(pageNo) => setPage(pageNo)}
      />
      {page === 1 && (
        <PersonalDetails onButtonClick={() => setPage(page + 1)} />
      )}
      {page === 2 && (
        <WorkspaceSettings onButtonClick={() => setPage(page + 1)} />
      )}
      {page === 3 && <Usage onButtonClick={() => setPage(page + 1)} />}
      {page === 4 && <RegistrationSuccess />}
    </div>
  );
};

export default OnboardingPage;
