import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import resValue from '../constants';

type CardProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

const Card: React.FC<CardProps> = ({ children, style }) => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.white,
          borderRadius: resValue.card.borderRadius,
          borderWidth: resValue.card.borderWidth,
          borderColor: resValue.card.borderColor,
          padding: resValue.card.padding,
          marginBottom: theme.spacing.lg,
          shadowColor: theme.colors.black,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 2,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
  },
});

export default Card;