import React, {useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {View, TextInput, Text, FlatList} from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import RadioButton from '../../components/radioButton';
import ProgressIndicator from '../../components/progressIndicator';
import commonStyle from '../../theme/common/commonStyle';
import {FormSubmitRequest} from "../../redux/actions";

const Form1 = ({ navigation }) => {
  let inputElement = useRef();
  const dispatch = useDispatch();
  const initialState = {Name: '', Address: '', errorName: false, errorAddress: false, selectedGender: 0, switchVal: false}
  const [state, setState] = useState(initialState);
  const {Name, Address, errorName, errorAddress, selectedGender, switchVal} = state;
  const {
      genderData, formData: {name, address, gender}
  } = useSelector((state) => state.form);

  useEffect(() => setState({...state, Name: name ? name : '', Address: address ? address : '', selectedGender: gender ? gender : 0}), []);
const setItemSelected = (id) => {
    setState({...state, selectedGender: id})
}
  const formSubmit = () => {
      if(Name === '' || Address === '') {
          Name === '' || Address === '' ? setState({...state, errorName: true, errorAddress: true}) :
          Name === '' && setState({...state, errorName: true}) ||
          Address === '' && setState({...state, errorAddress: true})
      }
      else {
          const request = {name: Name, address: Address, gender: selectedGender}
          dispatch(FormSubmitRequest(request))
          navigation.navigate("Form2")
      }
  }
  console.log(Name, Address)
  return (
          <View style={styles.mainContainer}>
                  <ProgressIndicator activeNum={1}/>
                  <View style={styles.formView}>
                      <Text>Enter Name: *</Text>
                      <TextInput
                          placeholder='Name'
                          value={Name}
                          style={commonStyle.textInput}
                          onChangeText={(Name) => setState({...state, errorName: false, Name})}
                          returnKeyType="next"
                          onSubmitEditing={() => inputElement.current.focus()}
                      />
                      {errorName && <Text style={commonStyle.errorMsg}>Please Enter Name</Text>}
                      <Text>Enter Address: *</Text>
                      <TextInput
                          placeholder="Address"
                          value={Address}
                          onChangeText={(Address) => setState({...state, errorAddress: false, Address})}
                          style={[commonStyle.textInput, {textAlignVertical: 'top'}]}
                          multiline={true}
                          numberOfLines={4}
                          ref={inputElement}/>
                      {errorAddress && <Text style={commonStyle.errorMsg}>Please Enter Address</Text>}
                      <View style={commonStyle.radioStyle}>
                          <Text>Select Gender: *</Text>
                          <FlatList
                              data={genderData}
                              horizontal
                              renderItem={({item: {value, id}}) => (
                                  <View style={commonStyle.radioButtonView}>
                                      <Text style={commonStyle.radioTextStyle}>
                                          {value}
                                      </Text>
                                      <RadioButton selected={selectedGender === id} onPress={() => setItemSelected(id)}/>
                                  </View>
                              )}
                          />
                      </View>
                  </View>

                  <Button onPress={() => formSubmit()} title="Next"/>
              </View>
  );
};

export default Form1;
