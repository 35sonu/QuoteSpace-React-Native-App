import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Share from 'react-native-share';
import {getFavorites, removeFavorite} from '../services/storageService';
import {formatDate} from '../utils/helpers';

const {width} = Dimensions.get('window');

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [])
  );

  const loadFavorites = async () => {
    try {
      setLoading(true);
      const data = await getFavorites();
      setFavorites(data.reverse());
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFavorite = async (id) => {
    try {
      const updated = await removeFavorite(id);
      setFavorites(updated.reverse());
    } catch (error) {}
  };

  const handleShare = async (quote, author) => {
    try {
      await Share.open({
        message: `"${quote}"\n\n- ${author}`,
      });
    } catch (error) {}
  };

  const renderFavoriteItem = ({item, index}) => {
    const gradientColors = [
      ['#667eea', '#764ba2'],
      ['#f093fb', '#f5576c'],
      ['#4facfe', '#00f2fe'],
      ['#43e97b', '#38f9d7'],
      ['#fa709a', '#fee140'],
    ];
    const gradient = gradientColors[index % gradientColors.length];

    return (
      <LinearGradient colors={gradient} style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.quote}>"{item.quote}"</Text>
          <Text style={styles.author}>- {item.author}</Text>
          {item.savedAt && (
            <Text style={styles.date}>{formatDate(item.savedAt)}</Text>
          )}
        </View>

        <View style={styles.actions}>
          <TouchableOpacity
            onPress={() => handleRemoveFavorite(item.id)}
            style={styles.button}>
            <Text style={styles.buttonText}>🗑️</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleShare(item.quote, item.author)}
            style={styles.button}>
            <Text style={styles.buttonText}>📤</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Favorites</Text>
        </View>
        <View style={styles.centered}>
          <Text style={styles.emptyText}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Favorites</Text>
        <Text style={styles.count}>{favorites.length} saved quotes</Text>
      </View>

      {favorites.length === 0 ? (
        <View style={styles.centered}>
          <Text style={styles.emptyIcon}>💭</Text>
          <Text style={styles.emptyText}>No favorites yet</Text>
          <Text style={styles.emptySubtext}>
            Start saving your favorite quotes!
          </Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          renderItem={renderFavoriteItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
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
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  count: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  list: {
    padding: 20,
    paddingTop: 0,
  },
  card: {
    width: width - 40,
    minHeight: 200,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    flex: 1,
  },
  quote: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    lineHeight: 26,
    marginBottom: 10,
    fontStyle: 'italic',
  },
  author: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'right',
    marginTop: 5,
  },
  date: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.8,
    textAlign: 'right',
    marginTop: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)',
    paddingTop: 15,
  },
  button: {
    padding: 5,
  },
  buttonText: {
    fontSize: 24,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 20,
    color: '#666',
    fontWeight: '600',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
    marginTop: 10,
  },
});

export default FavoritesScreen;
