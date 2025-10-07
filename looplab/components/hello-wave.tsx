import React, { useEffect } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSequence, withRepeat } from 'react-native-reanimated';

export function HelloWave() {
  const rotation = useSharedValue(0);

  useEffect(() => {
    // Animate: rotate to 25deg, back to 0, repeat 4 times
    rotation.value = withRepeat(
      withSequence(
        withTiming(25, { duration: 150 }),
        withTiming(0, { duration: 150 })
      ),
      4,
      false
    );
  }, [rotation]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  }));

  return (
    <Animated.Text style={animatedStyle}>
      👋
    </Animated.Text>
  );
}
