import "./styles.css";
import Header from "../src/components/Header";
import WelcomeSection from "./components/WelcomeSection";
function App() {
  return (
    <div className="App">
      <div className="section">
        <Header />
        <WelcomeSection />
      </div>
    </div>
  );
}

export default App;
