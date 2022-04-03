import "./App.scss";
import OnboardingPage from "./components/OnboardingPage/OnboardingPage";
import LabelContext from "./context/LabelContext";
import { labels } from "./context/labels";

function App() {
  return (
    <LabelContext.Provider value={labels}>
      <OnboardingPage></OnboardingPage>
    </LabelContext.Provider>
  );
}

export default App;
