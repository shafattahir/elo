import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

type ButtonProps = {
  title: string;
  onPress: () => void;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
};

export const Button = ({
  title,
  onPress,
  loading = false,
  variant = 'primary',
}: ButtonProps) => {
  const { theme } = useTheme();

  const getButtonStyle = () => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: theme.colors.secondary,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: theme.colors.primary,
        };
      default:
        return {
          backgroundColor: theme.colors.primary,
        };
    }
  };

  return (
    <TouchableOpacity
      style={[
        {
          padding: theme.spacing.md,
          borderRadius: theme.spacing.sm,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: loading ? 0.7 : 1,
        },
        getButtonStyle(),
      ]}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.white} />
      ) : (
        <Text style={{ color: theme.colors.white }}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};