import {StyleSheet} from 'react-native';
import {Colors, hp, wp} from '../../theme';

export default StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.lightGray,
      alignItems: 'center',
      paddingTop: hp(5),
    },
    formView: {
        marginVertical: hp(8)
    },
    switchText: {
        height: hp(2),
        marginLeft: wp(1)
    },
    switchView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
});
