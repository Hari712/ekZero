import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from "./styles";
import Button from "../../components/button";
import {useDispatch, useSelector} from "react-redux";
import {getClearStoredData} from "../../redux/actions";


const ThankYou = ({navigation}) => {
    const dispatch = useDispatch();
    const {
       clearData
    } = useSelector((state) => state.form);
    const gotoHome = () => {
        dispatch(getClearStoredData())

    }
    useEffect(() =>  clearData === true && navigation.navigate('Form1'), [clearData])
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.thankYouText}>THANK YOU FOR SUBMIT YOUR INTEREST.</Text>
            <Button onPress={() => gotoHome()} title="Go to first page"/>
        </View>
    );
};
export default ThankYou;
