import React, { useState, useEffect } from 'react';
import { View, Animated, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const CustomSwitch = ({ value, onToggle }: { value: boolean; onToggle: () => void }) => {
  const [anim] = useState(new Animated.Value(value ? 1 : 0));

  useEffect(() => {
    Animated.timing(anim, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [value]);

  const translateX = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [4, 20], // move thumb (adjust if sizes change)
  });

  const trackColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ccc', '#0091CD'], // gray -> blue
  });

  return (
    <TouchableWithoutFeedback onPress={onToggle}>
      <Animated.View style={[styles.track, { backgroundColor: trackColor }]}>
        <Animated.View style={[styles.thumb, { transform: [{ translateX }] }]} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  track: {
    width: 36,
    height: 20,
    borderRadius: 16,
    padding: 2,
    justifyContent: 'center',
  },
  thumb: {
    width: 16,
    height: 16,
    borderRadius: 14,
    backgroundColor: 'white',
    position: 'absolute',
    top: 2,
    left: -2,
  },
});

export default CustomSwitch;
