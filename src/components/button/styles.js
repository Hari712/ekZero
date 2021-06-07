import { StyleSheet } from 'react-native'
import {
  wp, hp, FontSizes, Colors
} from '../../theme'

export default StyleSheet.create({
  btn: {
    borderColor: Colors.buttonBorder,
    borderWidth: 0.5,
    height: hp(4),
    width: wp(50),
    marginBottom: hp(4),
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

  },
  btnText: {
    fontSize: FontSizes.medium,
    color: Colors.buttonTextColor,
  }
})
