# QuoteSpace - Quick Commands Reference

## Essential Commands

### Start the App
```bash
# Start Metro Bundler (in one terminal)
npm start

# Run on Android (in another terminal)
npm run android

# Run on iOS (Mac only)
npm run ios
```

### Development
```bash
# Clear cache and restart
npm start -- --reset-cache

# Reload app
# Press 'r' in Metro terminal
# OR shake device and tap "Reload"
```

### Debugging
```bash
# Open React Native debugger
# Shake device → "Debug"

# View logs
# Metro terminal shows console.log outputs

# Android logs
adb logcat

# iOS logs (Mac)
npx react-native log-ios
```

### Build Issues
```bash
# Clean Android build
cd android
./gradlew clean
cd ..

# Clean iOS build (Mac)
cd ios
rm -rf Pods
pod install
cd ..

# Remove and reinstall node_modules
rm -rf node_modules
npm install
```

### Git Commands
```bash
# Initialize repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: QuoteSpace app"

# Add remote repository
git remote add origin <your-repo-url>

# Push to GitHub
git push -u origin main

# Check status
git status
```

## Project Structure Commands

### Navigate to project
```bash
cd "C:\Users\SONU KUMAR\react-project\QuoteSpace"
```

### View file structure
```bash
# Windows
tree /F src

# Or just open in VS Code
code .
```

## Testing Commands

### Run on physical Android device
```bash
# Enable USB debugging on device
# Connect device via USB
# Run:
npm run android
```

### Run on Android emulator
```bash
# Start emulator from Android Studio
# OR via command line:
emulator -avd <avd-name>

# Then run:
npm run android
```

## Package Commands

### Install new package
```bash
npm install <package-name>

# For native dependencies, rebuild:
npm run android  # or npm run ios
```

### Update packages
```bash
npm update
```

## Useful Metro Commands

While Metro is running, press:
- `r` - Reload app
- `d` - Open developer menu
- `i` - Run on iOS
- `a` - Run on Android

## Device Commands

### Android
```bash
# List connected devices
adb devices

# Install APK manually
adb install <path-to-apk>

# Uninstall app
adb uninstall com.quotespace

# Reverse port (for API testing)
adb reverse tcp:8081 tcp:8081
```

## Performance Commands

### Generate APK (Android)
```bash
cd android
./gradlew assembleRelease
# APK location: android/app/build/outputs/apk/release/
```

### Bundle for production
```bash
# Android
cd android
./gradlew bundleRelease

# iOS (Mac)
# Use Xcode → Product → Archive
```

## Troubleshooting Commands

### Metro bundler won't start
```bash
# Kill process on port 8081
# Windows:
netstat -ano | findstr :8081
taskkill /PID <PID> /F

# Then restart:
npm start
```

### App won't install
```bash
# Uninstall old version
adb uninstall com.quotespace

# Clear Metro cache
npm start -- --reset-cache

# Try again
npm run android
```

### Build errors
```bash
# Full clean rebuild
rm -rf node_modules
npm install
cd android
./gradlew clean
cd ..
npm run android
```

## Environment Info

### Check setup
```bash
npx react-native doctor
```

### Check React Native version
```bash
npx react-native --version
```

### Check Node version
```bash
node --version
npm --version
```

## Quick Fixes

### Problem: "Could not connect to development server"
**Solution:**
```bash
# Make sure Metro is running
npm start

# Check device/emulator is connected
adb devices
```

### Problem: "Unable to load script"
**Solution:**
```bash
# Clear cache
npm start -- --reset-cache
```

### Problem: Red screen errors
**Solution:**
```bash
# Check error message
# Fix code issue
# Reload app (press 'r' in Metro or shake device)
```

### Problem: "Module not found"
**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules
npm install

# If still issues, clear cache
npm start -- --reset-cache
```

## Helpful Shortcuts

### VS Code
- `Ctrl + `` - Open terminal
- `Ctrl + P` - Quick file search
- `Ctrl + Shift + F` - Search in files
- `F12` - Go to definition

### Android Studio
- `Shift + Shift` - Search everywhere
- `Ctrl + Alt + L` - Format code
- `Alt + Enter` - Quick fix

## Documentation Links

- React Native: https://reactnative.dev
- React Navigation: https://reactnavigation.org
- AsyncStorage: https://react-native-async-storage.github.io
- React Native Share: https://github.com/react-native-share/react-native-share

## Remember

1. Always have Metro running before launching app
2. Save files before reloading app
3. Check Metro terminal for errors
4. Use `console.log()` for debugging
5. Shake device for developer menu

Happy coding! 🚀
