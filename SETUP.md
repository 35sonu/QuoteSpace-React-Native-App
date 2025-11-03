# QuoteSpace Setup Guide

## Quick Start

### For Android (Recommended for Windows)

1. **Start Metro Bundler**
   ```bash
   npm start
   ```

2. **In a new terminal, run Android app**
   ```bash
   npm run android
   ```

### For iOS (Mac Only)

1. **Install iOS dependencies**
   ```bash
   cd ios
   pod install
   cd ..
   ```

2. **Run the app**
   ```bash
   npm run ios
   ```

## Troubleshooting

### Common Issues

#### 1. Metro Bundler Issues
```bash
# Clear cache and restart
npm start -- --reset-cache
```

#### 2. Build Errors
```bash
# Clean Android build
cd android
./gradlew clean
cd ..
npm run android
```

#### 3. Dependency Issues
```bash
# Remove node_modules and reinstall
rm -rf node_modules
npm install
```

#### 4. React Native Linear Gradient (Android)
If you face issues with linear gradient:
```bash
cd android
./gradlew clean
cd ..
npx react-native run-android
```

### Platform-Specific Setup

#### Android
- Ensure Android Studio is installed
- SDK version 33 or higher
- Enable USB debugging on your device OR
- Have an Android emulator running

#### iOS (Mac only)
- Xcode 14 or higher required
- CocoaPods installed
- iOS Simulator or physical device

## Testing the App

1. Launch the app
2. You should see a quote on the home screen
3. Tap the heart icon to favorite a quote
4. Tap "New Quote" to get another quote
5. Tap the "Favorites" tab to see saved quotes
6. Tap the share icon to share a quote
7. Tap the trash icon to remove from favorites

## API Configuration (Optional)

The app works out of the box with quotable.io (no API key needed).

To use API Ninjas instead:
1. Get free API key: https://api-ninjas.com
2. Edit `src/services/quoteService.js`
3. Replace `YOUR_API_KEY_HERE` with your key

## Features Checklist

- [x] Fetch quotes from API
- [x] Display quotes with beautiful UI
- [x] Save favorites locally
- [x] Favorites screen
- [x] Share quotes
- [x] Animated gradients
- [x] Smooth transitions
- [x] Error handling
- [x] Loading states

## Next Steps

1. Take screenshots of the app
2. Record a demo video
3. Update README.md with:
   - Your name and GitHub username
   - Screenshots
   - Demo video link
4. Create GitHub repository
5. Push code to GitHub
6. Submit via Google Form

Good luck! 🚀
