import AsyncStorage from '@react-native-async-storage/async-storage';

// Store token after login
export const storeAuthToken = async (token: string) => {
  await AsyncStorage.setItem('@auth_token', token);
};

// Retrieve token for API calls
export const getAuthToken = async () => {
  return await AsyncStorage.getItem('@auth_token');
};