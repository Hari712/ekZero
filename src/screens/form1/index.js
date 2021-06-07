import React, {useRef, useState} from 'react';
import {View, TextInput, Text, FlatList} from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import RadioButton from '../../components/radioButton';
import ProgressIndicator from '../../components/progressIndicator';
import SwitchButton from '../../components/switchbutton';
import commonStyle from '../../theme/common/commonStyle';

const Form1 = () => {
  let inputElement = useRef();
  const initialState = {Name: '', Address: '', errorName: false, errorAddress: false, selectedRadio: 0, switchVal: false}
  const [state, setState] = useState(initialState);
  const {Name, Address, errorName, errorAddress, selectedRadio, switchVal} = state;
  const radioButtonData = [
    {
        id: 0,
        value: 'HTML',
    },
    {
        id: 1,
        value: 'PHP',
    },
    {
        id: 2,
        value: 'JAVASCRIPT',
    }
]
const setItemSelected = (id) => {
    setState({...state, selectedRadio: id})
}
const toggleSwitch = (value) => {
  console.log(value)
}
  const formSubmit = () => {
    Name === '' || Address === '' ?  setState({...state, errorName: true, errorAddress: true}) : 
    Name === '' &&  setState({...state, errorName: true}) ||
    Address === '' &&  setState({...state, errorAddress: true})
  }
  return (
    <View style={styles.mainContainer}>
      <ProgressIndicator activeNum={1} />
      <View style={{marginVertical: 60}}>
      <Text>Enter Name: *</Text>
      <TextInput
        placeholder='Name'
        value={Name}
        style={commonStyle.textInput}
        onChangeText={(Name) => setState({...state, errorName: false, Name})}
        returnKeyType="next"
        onSubmitEditing={() => inputElement.current.focus()}
      />
      {errorName && <Text>Please Enter Name</Text>}
      <Text>Enter Address: *</Text>
      <TextInput
        placeholder="Address"
        value={Address}
        onChangeText={(Address) => setState({...state, errorAddress: false, Address})}
        style={[commonStyle.textInput, {textAlignVertical: 'top'}]}
        multiline={true}
        numberOfLines={4}
        ref={inputElement} />
        {errorAddress && <Text>Please Enter Address</Text>}
        <View style={commonStyle.radioStyle}>
        <FlatList
            data={radioButtonData}
            horizontal
            renderItem={({item: {value, id, isSelected}}) => (
                <View style={commonStyle.radioButtonView}>
                    <Text style={commonStyle.radioTextStyle}>
                        {value}
                    </Text>
                    <RadioButton selected={selectedRadio === id} onPress={() => setItemSelected(id)}/>
                </View>
            )}
        />
        </View>
         <SwitchButton value={switchVal} onValueChange={(value) => toggleSwitch(value)}/>
        </View>
        <Button onPress={() => formSubmit()} title="Next" />
    </View>
  );
};

export default Form1;