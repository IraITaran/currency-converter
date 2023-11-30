import React, { createContext, useContext, useState, useEffect } from "react";
import CurrencyService from "../services/CurrencyService";

const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [exchangeRates, setExchangeRates] = useState({ UAH: 0.0, USD: 0.0 });
  const baseCurrency = "EUR";

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const rates = await CurrencyService.getExchangeRates();
        setExchangeRates({
          ...rates,
          [baseCurrency]: 1,
        });
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
