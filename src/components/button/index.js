import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = ({title, onPress, style}) => (
  <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
    <Text style={styles.btnText}>{title}</Text>
  </TouchableOpacity>
);
export default Button;
