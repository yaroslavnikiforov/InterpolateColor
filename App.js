/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  interpolateColor,
} from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 3000);
  }, []);

  return (
    <>
      <BlockOne />

      {isVisible ? <BlockTwo /> : null}
    </>
  );
}

function BlockOne() {
  const animatedValue = useSharedValue(300);
  const animatedStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animatedValue.value,
      [0, 234, 468],
      ['red', 'orange', 'yellow'],
    );

    return {backgroundColor};
  }, [animatedValue]);

  return <Animated.View style={[styles.container, animatedStyles]} />;
}

function BlockTwo() {
  const animatedValue = useSharedValue(0.3);
  const animatedStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animatedValue.value,
      [0, 1],
      ['green', 'cyan'],
    );

    return {backgroundColor};
  }, [animatedValue]);

  return <Animated.View style={[styles.container, animatedStyles]} />;
}
