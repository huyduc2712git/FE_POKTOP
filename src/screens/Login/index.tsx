import {
  ANIMATION_DURATION,
  ANIMATION_TO_VALUE,
  INPUT_RANGE_END,
  INPUT_RANGE_START,
  OUTPUT_RANGE_END,
  OUTPUT_RANGE_START,
} from '../../utils/constants';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Easing,
  ImageBackground,
} from 'react-native';

interface LoginScreenProps {}

const LoginScreen = (props: LoginScreenProps) => {
  const initialValue = 0;
  const translateValue = useRef(new Animated.Value(initialValue)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateValue, {
        toValue: ANIMATION_TO_VALUE,
        duration: ANIMATION_DURATION,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [translateValue]);

  const translateAnimation = translateValue.interpolate({
    inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
    outputRange: [OUTPUT_RANGE_START, OUTPUT_RANGE_END],
  });
  const AnimetedImage = Animated.createAnimatedComponent(ImageBackground);

  return (
    <>
      <AnimetedImage
        resizeMode="repeat"
        style={[
          styles.container,
          {
            transform: [
              {
                translateX: translateAnimation,
              },
              {
                translateY: translateAnimation,
              },
            ],
          },
        ]}
        source={{
          uri: 'https://previews.123rf.com/images/jaaakworks/jaaakworks2005/jaaakworks200500042/146918360-vector-cartoon-character-corgi-dog-seamless-pattern-background-for-design.jpg',
        }}
      />
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 1200,
    height: 1200,
    top: 0,
    opacity: 1,
    transform: [
      {
        translateX: 0,
      },
      {
        translateY: 0,
      },
    ],
  },
});
