import {StyleSheet} from 'react-native';
import {Colors,FontSizes, hp, wp} from '../index';


export default StyleSheet.create({
    textInput: {
      width: wp(80),
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: wp(5),
      padding:wp(3),
      marginVertical: wp(2)
    },
    radioStyle: {
        display: 'flex',
        height: hp(5)
    },
    radioTextStyle: {
        fontSize: FontSizes.large,
        alignItems: 'center',
    },
    radioButtonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: wp(1)
    }
});