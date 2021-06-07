import React, {useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {View, TextInput, Text, FlatList} from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import ProgressIndicator from '../../components/progressIndicator';
import SwitchButton from '../../components/switchbutton';
import commonStyle from '../../theme/common/commonStyle';
import {FormSubmitRequest} from "../../redux/actions";
import RadioButton from "../../components/radioButton";



const Form3 = ({ navigation }) => {
  let inputElement = useRef();
  const dispatch = useDispatch();
  const initialState = {CompanyName: '', errorCompanyName: false, selectedInterest: 0, interestoJoin: true}
  const [state, setState] = useState(initialState);
  const {CompanyName, errorCompanyName, selectedInterest, interestoJoin} = state;
  const {
      interestData, formData: {company, interest, interestTojoin}, formData
  } = useSelector((state) => state.form);

  useEffect(() => setState({...state, CompanyName:company ? company : '', selectedInterest: interest ? interest : 0, interestoJoin: interestTojoin ? interestTojoin : true}), []);
    const setItemSelected = (id) => {
        setState({...state, selectedInterest: id})
    }
    const toggleSwitch = (value) => {
        setState({...state, interestoJoin: value})
    }
    const formSubmit = () => {
      if(CompanyName === '') {
          setState({...state, errorAddress: true})
      }
      else {
          const request = {...formData, company: CompanyName, interest: selectedInterest, interestTojoin: interestoJoin }
          dispatch(FormSubmitRequest(request))
          navigation.navigate('Success')
      }
     }
  return (
          <View style={styles.mainContainer}>
                  <ProgressIndicator activeNum={3}/>
                  <View style={styles.formView}>
                      <Text>Enter Company Name: *</Text>
                      <TextInput
                          placeholder='Company Name'
                          value={CompanyName}
                          style={commonStyle.textInput}
                          onChangeText={(CompanyName) => setState({...state, errorName: false, CompanyName})}
                          returnKeyType="next"
                          onSubmitEditing={() => inputElement.current.focus()}
                      />
                      {errorCompanyName && <Text>Please Enter Company Name</Text>}
                      <View style={commonStyle.radioStyle}>
                          <Text>Select Interest: *</Text>
                          <FlatList
                              data={interestData}
                              horizontal
                              renderItem={({item: {value, id}}) => (
                                  <View style={commonStyle.radioButtonView}>
                                      <Text style={commonStyle.radioTextStyle}>
                                          {value}
                                      </Text>
                                      <RadioButton selected={selectedInterest === id} onPress={() => setItemSelected(id)}/>
                                  </View>
                              )}
                          />
                      </View>
                      <View style={styles.switchView}>
                          <SwitchButton value={interestoJoin} onValueChange={(value) => toggleSwitch(value)}/>
                          <Text style={styles.switchText}>Are You Interested To Join? </Text>
                      </View>
                  </View>

                  <Button onPress={() => formSubmit()} title="Submit"/>
              </View>
  );
};

export default Form3;
