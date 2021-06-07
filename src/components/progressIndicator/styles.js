import {StyleSheet, Platform} from 'react-native';
import {hp, wp, Colors} from '../../theme';

export default StyleSheet.create({
  stepper: {
      display: 'flex',
   justifyContent: 'center',
    height: hp(8),
    backgroundColor: Colors.white,
  },
  steps: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  linestepper: {
    width: wp(3),
    height: 1,
    backgroundColor: 'black',
  },
  steppercircle: {
    backgroundColor: 'black',
    width: wp(10),
    height: wp(10),
    borderRadius: 50 / 2,
    justifyContent: 'center',
  },
  stepperActive: {
    borderRadius: 50 / 2,
    borderWidth: 1,
    height: wp(12),
    alignItems: 'center',
    borderColor: 'gray',
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
  activenum: {
    backgroundColor: 'red',
    width: wp(12),
    height: wp(12),
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepperblackcircle: {
    backgroundColor: 'black',
    width: wp(8),
    height: wp(8),
    borderRadius: 50 / 2,
    justifyContent: 'center',
  },
  steppernum: {
    color: Colors.white,
    textAlign: 'center',
  },
  stepperheading: {
    color: 'red',
    textAlign: 'center',
    width: wp(35),
  },
});