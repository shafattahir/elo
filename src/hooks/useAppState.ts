// src/hooks/useAppState.ts
import { useEffect } from 'react';
import { AppState, AppStateStatus } from 'react-native';

export const useAppState = (onChange: (state: AppStateStatus) => void) => {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', onChange);
    return () => subscription.remove();
  }, [onChange]);
};