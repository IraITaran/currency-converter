import "./App.css";
import Header from "./Header";
import CurrencyConverter from "./CurrencyConverter";
import { CurrencyProvider } from "./CurrencyContext";

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
