// src/hooks/useNetwork.ts
import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { Alert } from 'react-native';

export const useNetwork = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(true);
  const [isInternetReachable, setIsInternetReachable] = useState<boolean | null>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      setIsInternetReachable(state.isInternetReachable);
      
      if (state.isInternetReachable === false) {
        Alert.alert(
          'Connection Lost',
          'Please check your internet connection',
          [{ text: 'OK' }]
        );
      }
    });

    return () => unsubscribe();
  }, []);

  return { isConnected, isInternetReachable };
};