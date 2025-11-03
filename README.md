# QuoteSpace – Daily Quote App 💭

<div align="center">
  <h3>A beautiful React Native app for daily motivation with inspirational quotes</h3>
  <p>React Native Developer Assignment by Dev Innovations Labs</p>
</div>

---

## 📱 About The Project

QuoteSpace is a clean and elegant mobile application that delivers motivational quotes with a stunning gradient UI. Users can discover new quotes, save their favorites, and share inspiration with others.

### ✨ Key Features

#### Core Features ✅
- **Fetch Quotes from Public API** - Integrated with quotable.io API for seamless quote delivery
- **Daily Quotes Display** - Beautiful card-based UI with animated transitions
- **Favorite Quotes** - Save quotes locally using AsyncStorage
- **Favorites Screen** - Dedicated screen to view and manage saved quotes

#### Bonus Features ⭐
- **Share Functionality** - Share quotes via social media, messaging apps, and more
- **Animated Gradient Backgrounds** - 10+ beautiful gradient combinations that rotate randomly
- **Smooth Animations** - Fade-in animations for quotes and scale animations for interactions
- **Delete from Favorites** - Easy management of saved quotes
- **Quote Metadata** - Display author, category, and save date

---

### Home Screen
- Daily motivational quote with gradient background
- New quote button for fresh inspiration
- Heart icon to favorite quotes
- Share button for social sharing

### Favorites Screen
- Grid/list of all saved quotes
- Delete and share options for each quote
- Empty state when no favorites exist
- Save date displayed for each quote

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React Native CLI** | Core framework |
| **React Navigation** | Bottom tab navigation |
| **AsyncStorage** | Local data persistence |
| **Axios** | API requests |
| **React Native Linear Gradient** | Beautiful gradient backgrounds |
| **React Native Share** | Social sharing functionality |

---

## 📁 Project Structure

```
QuoteSpace/
├── src/
│   ├── components/
│   │   ├── QuoteCard.js          # Reusable quote card component
│   │   └── LoadingSpinner.js     # Loading indicator
│   ├── screens/
│   │   ├── HomeScreen.js          # Main quote display screen
│   │   └── FavoritesScreen.js     # Saved quotes screen
│   ├── services/
│   │   ├── quoteService.js        # API integration
│   │   └── storageService.js      # AsyncStorage operations
│   ├── utils/
│   │   └── helpers.js             # Utility functions
│   └── App.js                      # Navigation setup
├── App.tsx                         # Entry point
└── package.json
```

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- React Native development environment set up
- Android Studio (for Android) or Xcode (for iOS)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd QuoteSpace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install iOS dependencies (Mac only)**
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Link native dependencies**
   ```bash
   npx react-native-asset
   ```

### Running the App

#### For Android:
```bash
npx react-native run-android
```

#### For iOS (Mac only):
```bash
npx react-native run-ios
```

#### Start Metro Bundler (if not started automatically):
```bash
npx react-native start
```

---

## 🔧 Configuration

### API Setup
The app uses [Quotable.io](https://quotable.io) as the primary API (no key required).

To use api-ninjas.com instead:
1. Get a free API key from [API Ninjas](https://api-ninjas.com)
2. Open `src/services/quoteService.js`
3. Replace `YOUR_API_KEY_HERE` with your actual API key

---

## ✅ Features Breakdown

### 1. Quote Fetching
- Fetches random quotes from quotable.io API
- Fallback mechanism for error handling
- Displays quote, author, and category

### 2. Favorites Management
- Save quotes with a single tap
- Stored locally using AsyncStorage
- Persistent across app restarts
- Visual feedback (heart icon changes)

### 3. Favorites Screen
- List view of all saved quotes
- Delete functionality for each quote
- Share option for each quote
- Shows save date for each quote
- Empty state UI when no favorites

### 4. Share Feature
- Share quotes to any installed app
- Formatted message with quote and author
- Works with WhatsApp, Twitter, Instagram, etc.

### 5. Gradient Animations
- 10 predefined beautiful gradient combinations
- Random gradient for each new quote
- Smooth fade-in animations

### 6. UI/UX Enhancements
- Clean, modern design
- Responsive layout
- Loading states
- Error handling with retry option
- Tab navigation with icons

---

## 🎯 Evaluation Criteria Compliance

| Criteria | Implementation |
|----------|---------------|
| **Code Quality** | ✅ Modular components, clean separation of concerns, reusable utilities |
| **UI Design** | ✅ Beautiful gradients, consistent spacing, responsive design |
| **State Management** | ✅ React hooks (useState, useEffect), AsyncStorage for persistence |
| **API Integration** | ✅ Axios, error handling, loading states |
| **Project Structure** | ✅ Organized src/ folder with components, screens, services, utils |
| **Bonus Features** | ✅ Animations, share functionality, gradient backgrounds |

---

## 🌟 Bonus Features Implemented

- ✅ **Share Quotes** - Share to any social media or messaging app
- ✅ **Animated Gradient Backgrounds** - 10+ beautiful color combinations
- ✅ **Smooth Transitions** - Fade-in and scale animations
- ✅ **Delete from Favorites** - Easy favorite management
- ✅ **Save Timestamps** - Track when quotes were favorited
- ✅ **Error Handling** - User-friendly error messages with retry
- ✅ **Empty States** - Informative UI when no data exists
- ✅ **Loading States** - Spinner during data fetch

---

## 📝 Code Quality Highlights

- **Modular Components**: Separated QuoteCard, LoadingSpinner for reusability
- **Service Layer**: Dedicated services for API and storage operations
- **Utility Functions**: Helper functions for common operations
- **Error Handling**: Try-catch blocks with user feedback
- **Consistent Styling**: Unified color scheme and design language
- **Comments**: Code documentation for clarity

---

## 🐛 Known Issues / Future Improvements

### Potential Enhancements:
- [ ] Add category filtering for quotes
- [ ] Implement search functionality
- [ ] Add daily notifications with quotes
- [ ] Theme toggle (light/dark mode)
- [ ] Quote of the day widget
- [ ] Offline mode with cached quotes
- [ ] User authentication for cloud sync

---

## 📸 Demo Video

> **Note**: Record a screen recording of the app and add the link here

---

## 👨‍💻 Developer

**Your Name**
- GitHub: [@yourusername](https://github.com/35sonu)
- Email: work.sonukumar03@gmail.com

---

## 📄 License

This project is created as part of the React Native Developer Assignment by Dev Innovations Labs.

---

## 🙏 Acknowledgments

- [Quotable.io](https://quotable.io) - Free quote API
- [API Ninjas](https://api-ninjas.com) - Alternative quote API
- [React Native Community](https://reactnative.dev) - Documentation and support
- Dev Innovations Labs - For the assignment opportunity

---

## 📞 Support

For any questions or issues, please open an issue in the GitHub repository or contact via email.

---

<div align="center">
  <p>Made with ❤️ and React Native</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
