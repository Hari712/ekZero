import {StyleSheet} from 'react-native';
import {Colors, hp, common} from '../../theme';

export default StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.lightGray,
      alignItems: 'center',
      paddingTop: hp(5),
    },
    formView: {
        marginVertical: hp(8)
    }
});
