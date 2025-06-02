module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // Only include plugins you're actually using
    'react-native-reanimated/plugin' // If using Reanimated
  ]
};