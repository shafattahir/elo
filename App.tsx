import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { AuthProvider } from './src/contexts/AuthContext';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
    
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
              <Provider store={store}>
                <RootNavigator />
              </Provider>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;