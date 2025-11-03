import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import QuoteCard from '../components/QuoteCard';
import LoadingSpinner from '../components/LoadingSpinner';
import {fetchQuote} from '../services/quoteService';
import {saveFavorite, isFavorite} from '../services/storageService';
import {getRandomGradient} from '../utils/helpers';

const HomeScreen = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gradient, setGradient] = useState(getRandomGradient());
  const [favorited, setFavorited] = useState(false);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    loadQuote();
  }, []);

  useEffect(() => {
    if (quote) {
      checkFavoriteStatus();
    }
  }, [quote]);

  const loadQuote = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchQuote();
      setQuote(data);
      setGradient(getRandomGradient());
      
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } catch (err) {
      setError('Failed to load quote. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const checkFavoriteStatus = async () => {
    if (quote) {
      const status = await isFavorite(quote);
      setFavorited(status);
    }
  };

  const handleFavorite = async () => {
    try {
      await saveFavorite(quote);
      setFavorited(true);
    } catch (err) {}
  };

  const handleNewQuote = () => {
    fadeAnim.setValue(0);
    loadQuote();
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={loadQuote}>
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>QuoteSpace</Text>
        <Text style={styles.subtitle}>Daily Motivation</Text>
      </View>

      <Animated.View style={[styles.quoteContainer, {opacity: fadeAnim}]}>
        {quote && (
          <QuoteCard
            quote={quote.quote}
            author={quote.author}
            category={quote.category}
            gradient={gradient}
            onFavorite={handleFavorite}
            isFavorited={favorited}
          />
        )}
      </Animated.View>

      <TouchableOpacity style={styles.newQuoteButton} onPress={handleNewQuote}>
        <Text style={styles.newQuoteButtonText}>✨ New Quote</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  quoteContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newQuoteButton: {
    backgroundColor: '#667eea',
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  newQuoteButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#e74c3c',
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#667eea',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
