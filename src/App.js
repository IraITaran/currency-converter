import "./App.css";
import Header from "./components/Header/Header";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import { CurrencyProvider } from "./context/CurrencyContext";

function App() {
  return (
    <CurrencyProvider>
      <div className="app-container">
        <Header />
        <CurrencyConverter />
      </div>
    </CurrencyProvider>
  );
}

export default App;
