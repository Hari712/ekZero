import {Colors, hp, wp} from "../../theme";
import Switch from "react-native-switch-pro";
import React from "react";
import {View} from "react-native";
import styles from "./styles";

const switchbutton = (props) => {
    return (
        <View>
            <Switch
                height={hp(2)}
                width={wp(8)}
                circleStyle={styles.circleStyle}
                style={styles.switchStyle}
                backgroundActive={Colors.themeColor}
                onSyncPress={value => props.onValueChange(value)}
                value={props.value}
            />
        </View>
    )
}
export default switchbutton;
