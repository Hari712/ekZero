import {Dimensions} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from './responsive/responsiveScreen';
import {Colors} from './colors';
import FontSizes from './fontSize';
import {Images} from './images';

const DeviceHeight = Dimensions.get('window').height;
const DeviceWidth = Dimensions.get('window').width;

export {hp, wp, Colors, FontSizes, DeviceHeight, DeviceWidth, Images};
