import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';

const radioButton = ({onPress, selected}) => (
  <TouchableOpacity onPress={onPress} style={styles.circleOutline}>
    {selected ? <View style={styles.circleInnerView} /> : null}
  </TouchableOpacity>
);
export default radioButton;
