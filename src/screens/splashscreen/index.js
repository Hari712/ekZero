import React from 'react';
import {Animated, Text} from 'react-native';
import styles from './styles';

const SplashScreen = ({fadeAnim}) => {
  return (
    <Animated.View style={[styles.mainContainer, {opacity: fadeAnim}]}>
      <Text style={styles.splaceText}>EKZERO</Text>
    </Animated.View>
  );
};
export default SplashScreen;
