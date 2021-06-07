import { StyleSheet } from 'react-native'
import {Colors, FontSizes} from '../../theme'

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white
  },
  splaceText: {
    fontSize: FontSizes.xlarger,
    color: Colors.themeColor
  }
})
