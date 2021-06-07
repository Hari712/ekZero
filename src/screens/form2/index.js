import React, {useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {View, TextInput, Text, FlatList} from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import RadioButton from '../../components/radioButton';
import ProgressIndicator from '../../components/progressIndicator';
import SwitchButton from '../../components/switchbutton';
import commonStyle from '../../theme/common/commonStyle';
import {FormSubmitRequest} from "../../redux/actions";


const Form2 = ({ navigation }) => {
  let inputElement = useRef();
  const dispatch = useDispatch()
  const initialState = {Email: '', Contact: '', errorEmail: false, errorContact: false}
  const [state, setState] = useState(initialState);
  const {Email, Contact, errorEmail, errorContact} = state;
  const {
     formData: {email, contact}, formData
  } = useSelector((state) => state.form);

  useEffect(() => setState({...state, Email: email ? email : '', Contact: contact ? contact : ''}), []);

  const formSubmit = () => {
      if(Email === '' || Contact === '') {
          Email === '' || Contact === '' ? setState({...state, errorEmail: true, errorContact: true}) :
              Email === '' && setState({...state, errorEmail: true}) ||
              Contact === '' && setState({...state, errorContact: true})
      }
      else {
          const request = { ...formData, email: Email,contact: Contact }
          dispatch(FormSubmitRequest(request))
          navigation.navigate("Form3")
      }
  }

  return (
    <View style={styles.mainContainer}>
      <ProgressIndicator activeNum={2} />
      <View style={styles.formView}>
      <Text>Enter Email: *</Text>
      <TextInput
        placeholder='Email Id'
        value={Email}
        style={commonStyle.textInput}
        onChangeText={(Email) => setState({...state, errorEmail: false, Email})}
        returnKeyType="next"
        onSubmitEditing={() => inputElement.current.focus()}
      />
      {errorEmail && <Text style={commonStyle.errorMsg}>Please Email ID</Text>}
      <Text>Enter Contact No: *</Text>
      <TextInput
        placeholder="Contact No"
        value={Contact}
        onChangeText={(Contact) => setState({...state, errorContact: false, Contact})}
        style={commonStyle.textInput}
        keyboardType={'phone-pad'}
        ref={inputElement} />
        {errorContact && <Text style={commonStyle.errorMsg}>Please Enter Contact No</Text>}
      </View>
        <View style={{display: 'flex', }}>
        <Button onPress={() => navigation.goBack()} title="Previous"/>
        <Button onPress={() => formSubmit()} title="Next" />
        </View>
    </View>
  );
};

export default Form2;
