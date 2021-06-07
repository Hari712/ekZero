import React from 'react';
import {Text, View, FlatList} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProgressIndicator = ({activeNum, totalNum = 3}) => (
    <View style={styles.stepper}>
    <FlatList
      data={Array.apply(null, new Array(totalNum)).map(function(el, i) {return ++i + ""})}
      renderItem={({item}) => (
        <>
          {item == activeNum ? (
            <View style={styles.steps}>
              <View style={[styles.stepperActive]}>
                <View style={styles.activenum}>
                  <Text style={styles.steppernum}>{item}</Text>
                </View>
              </View>
              {item == totalNum ? null : <View style={styles.linestepper} />}
            </View>
          ) : item < activeNum ? (
            <View style={styles.steps}>
              <View style={styles.stepperblackcircle}>
                  <MaterialIcons style={styles.steppernum} name={'done'} />
              </View>
              {item == totalNum ? null : <View style={styles.linestepper} />}
            </View>
          ) : (
            <View style={styles.steps}>
              <View style={styles.steppercircle}>
                <Text style={styles.steppernum}>{item}</Text>
              </View>
              {item == totalNum ? null : <View style={styles.linestepper} />}
            </View>
          )}
        </>
      )}
      horizontal
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
);
export default ProgressIndicator;
