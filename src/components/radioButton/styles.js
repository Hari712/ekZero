import { StyleSheet } from 'react-native'
import { Colors } from '../../theme'

export default StyleSheet.create({
  circleOutline: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleInnerView: {
    height: 14,
    width: 14,
    borderRadius: 8,
    backgroundColor: Colors.themeColor
  }
})
