import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@quotespace_favorites';

export const getFavorites = async () => {
  try {
    const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    return [];
  }
};

export const saveFavorite = async (quote) => {
  try {
    const favorites = await getFavorites();
    const quoteWithId = {
      ...quote,
      id: quote.id || Date.now().toString(),
      savedAt: new Date().toISOString(),
    };
    
    const exists = favorites.some(
      fav => fav.quote === quote.quote && fav.author === quote.author
    );
    
    if (!exists) {
      favorites.push(quoteWithId);
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
    
    return favorites;
  } catch (error) {
    throw error;
  }
};

export const removeFavorite = async (quoteId) => {
  try {
    const favorites = await getFavorites();
    const updatedFavorites = favorites.filter(fav => fav.id !== quoteId);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
    return updatedFavorites;
  } catch (error) {
    throw error;
  }
};

export const isFavorite = async (quote) => {
  try {
    const favorites = await getFavorites();
    return favorites.some(
      fav => fav.quote === quote.quote && fav.author === quote.author
    );
  } catch (error) {
    return false;
  }
};
