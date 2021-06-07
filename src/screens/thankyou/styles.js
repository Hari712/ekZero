import { StyleSheet } from 'react-native'
import {Colors, FontSizes, hp, wp} from '../../theme'

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.lightGray
    },
    thankYouText: {
        fontSize: FontSizes.xxLarge,
        textAlign: 'center',
        paddingHorizontal: wp(5),
        marginBottom: hp(5)

    }
})
