import React from "react";
import { useCurrency } from "../../context/CurrencyContext";
import "./Header.css";

export default function Header() {
  const exchangeRates = useCurrency();

  return (
    <header>
      <h1>Курсы валют</h1>
      <p>1 USD = {(exchangeRates.UAH / exchangeRates.USD).toFixed(2)} UAH</p>
      <p>1 EUR = {exchangeRates.UAH.toFixed(2)} UAH</p>
    </header>
  );
}
