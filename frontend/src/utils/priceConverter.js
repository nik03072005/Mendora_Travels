import { setLoading, setError } from '../../Redux/currencySLice';

export const convertPrice = async (priceInINR, targetCurrency, dispatch) => {
  if (targetCurrency === 'INR') {
    return Number(priceInINR.toFixed(2));
  }

  dispatch(setLoading(true));
  try {
    const response = await fetch(
      `https://api.frankfurter.app/latest?amount=${priceInINR}&from=INR&to=${targetCurrency}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rate');
    }
    const data = await response.json();
    const convertedPrice = data.rates[targetCurrency];

    if (!convertedPrice) {
      throw new Error(`Exchange rate for ${targetCurrency} not found`);
    }

    dispatch(setLoading(false));
    return Number(convertedPrice.toFixed(2));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
    console.error('Error converting price:', error);
    return priceInINR; // Fallback to INR price
  }
};