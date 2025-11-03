import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Share from 'react-native-share';

const {width} = Dimensions.get('window');

const QuoteCard = ({quote, author, category, gradient, onFavorite, isFavorited}) => {
  const scaleAnim = new Animated.Value(1);

  const handleShare = async () => {
    try {
      await Share.open({
        message: `"${quote}"\n\n- ${author}`,
      });
    } catch (error) {}
  };

  const handleFavoritePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    onFavorite();
  };

  return (
    <LinearGradient colors={gradient} style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.quote}>"{quote}"</Text>
        <Text style={styles.author}>- {author}</Text>
        {category && <Text style={styles.category}>{category}</Text>}
      </View>

      <View style={styles.actions}>
        <TouchableOpacity onPress={handleFavoritePress} style={styles.button}>
          <Animated.Text
            style={[
              styles.buttonText,
              {transform: [{scale: scaleAnim}]},
              isFavorited && styles.favorited,
            ]}>
            {isFavorited ? '❤️' : '🤍'}
          </Animated.Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleShare} style={styles.button}>
          <Text style={styles.buttonText}>📤</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width - 40,
    minHeight: 300,
    borderRadius: 20,
    padding: 30,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  quote: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
    lineHeight: 34,
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  author: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'right',
    marginTop: 10,
  },
  category: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.8,
    textAlign: 'center',
    marginTop: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 28,
  },
  favorited: {
    transform: [{scale: 1.1}],
  },
});

export default QuoteCard;
