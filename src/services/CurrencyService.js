class CurrencyService {
  static async getExchangeRates() {
    try {
      const response = await fetch(
        "http://data.fixer.io/api/latest?access_key=63f5a592b3e94936e9e7844b141eaf13&symbols=USD,UAH"
      );
      const data = await response.json();

      if (data.success) {
        return data.rates;
      } else {
        throw new Error(`Error fetching exchange rates: ${data.error}`);
      }
    } catch (error) {
      throw new Error(`Error fetching exchange rates: ${error.message}`);
    }
  }
}

export default CurrencyService;
