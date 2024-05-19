export const searchRecipes = async (params) => {
  const API_KEY = '70e837c944be430780658fbfd337ba25';
  /* 4690c0af7db346bf82563f78353e55de */
  const BASE_URL = 'https://api.spoonacular.com';
  const searchParams = new URLSearchParams({ ...params, apiKey: API_KEY });
  const url = `${BASE_URL}/recipes/complexSearch?${searchParams.toString()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 402) {
        throw new Error('API limit reached. Please try again in 24 hours.');
      }
      throw new Error(`API call failed with status ${response.status}`);
    }
    const data = await response.json();
    if (!data.results || !Array.isArray(data.results)) {
      console.error('Invalid data structure:', data);
      return [];
    }
    return data.results;
  } catch (error) {
    console.error('Failed to fetch recipes:', error);
    throw error;
  }
};
