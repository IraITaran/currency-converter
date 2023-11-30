import React, { createContext, useContext, useState, useEffect } from "react";

const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [exchangeRates, setExchangeRates] = useState({ UAH: 0.0, USD: 0.0 });
  const baseCurrency = "EUR";

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          "http://data.fixer.io/api/latest?access_key=63f5a592b3e94936e9e7844b141eaf13&symbols=USD,UAH"
        );
        const data = await response.json();
        setExchangeRates({ ...data.rates, [baseCurrency]: 1 });
      } catch (error) {
        console.error("Exchange rates fetch error:", error);
      }
    };

    fetchRates();
  }, [baseCurrency]);

  return (
    <CurrencyContext.Provider value={exchangeRates}>
      {children}
    </CurrencyContext.Provider>
  );
};

const useCurrency = () => {
  const context = useContext(CurrencyContext);

  return context;
};

export { CurrencyProvider, useCurrency };
