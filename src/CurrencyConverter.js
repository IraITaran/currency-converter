import React, { useState, useEffect } from "react";
import { useCurrency } from "./CurrencyContext";
import "./CurrencyConverter.css";

export default function CurrencyConverter() {
  const exchangeRates = useCurrency();
  const [amount, setAmount] = useState(1);
  const [currencyFrom, setCurrencyFrom] = useState("UAH");
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    const calculateConvertedAmount = () => {
      const rateFrom = exchangeRates[currencyFrom];
      const rateTo = exchangeRates[currencyTo];
      const converted = (amount / rateFrom) * rateTo;
      setConvertedAmount(converted.toFixed(2));
    };

    calculateConvertedAmount();
  }, [amount, currencyFrom, currencyTo, exchangeRates]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCurrencyFromChange = (e) => {
    setCurrencyFrom(e.target.value);
  };

  const handleCurrencyToChange = (e) => {
    setCurrencyTo(e.target.value);
  };

  return (
    <div className="currency-converter">
      <h2>Конвертер валют</h2>
      <div className="input-container">
        <input
          type="number"
          className="result"
          value={amount}
          onChange={handleAmountChange}
        />
        <select value={currencyFrom} onChange={handleCurrencyFromChange}>
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <div className="input-container">
        <input
          type="text"
          className="result"
          value={convertedAmount}
          readOnly
        />
        <select value={currencyTo} onChange={handleCurrencyToChange}>
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    </div>
  );
}
