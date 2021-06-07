import React from 'react';
import {Animated, Text} from 'react-native';
import styles from './styles';

const SplashScreen = ({fadeAnim}) => {
  return (
    <Animated.View style={[styles.mainContainer, {opacity: fadeAnim}]}>
      <Text>EKZERO</Text>
    </Animated.View>
  );
};
export default SplashScreen;
