import axios from 'axios';

const API_URL = 'https://api.api-ninjas.com/v1/quotes';
const API_KEY = 'YOUR_API_KEY_HERE';
const FALLBACK_API = 'https://api.quotable.io/random';

export const fetchQuote = async () => {
  try {
    if (API_KEY !== 'YOUR_API_KEY_HERE') {
      const response = await axios.get(API_URL, {
        headers: {'X-Api-Key': API_KEY},
      });
      return response.data[0];
    }
    
    const response = await axios.get(FALLBACK_API);
    return {
      quote: response.data.content,
      author: response.data.author,
      category: 'general',
    };
  } catch (error) {
    throw error;
  }
};

export const fetchMultipleQuotes = async (count = 10) => {
  try {
    const quotes = [];
    for (let i = 0; i < count; i++) {
      const response = await axios.get(FALLBACK_API);
      quotes.push({
        quote: response.data.content,
        author: response.data.author,
        category: 'general',
        id: response.data._id,
      });
    }
    return quotes;
  } catch (error) {
    throw error;
  }
};
