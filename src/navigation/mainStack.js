import React, {useEffect, useRef, useState} from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/splashscreen';
import Form1 from '../screens/form1';
import Form2 from '../screens/form2';
import Form3 from '../screens/form3';
import ThankYou from "../screens/thankyou";
import {Animated} from 'react-native';

const Stack = createStackNavigator();
const MainStack = () => {
  const [splash, setSplash] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setSplash(false);
    });
  });
  return (
    <>
      {splash ? (
        <SplashScreen fadeAnim={fadeAnim} />
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Form1">
            <Stack.Screen
              name="Form1"
              component={Form1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Form2"
              component={Form2}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Form3"
              component={Form3}
              options={{headerShown: false}}
            />
            <Stack.Screen
                name="Success"
                component={ThankYou}
                options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};
export default MainStack;
