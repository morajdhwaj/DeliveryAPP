import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import { Button, TextInput} from 'react-native-paper';
import { registerStyle } from './register.style';
import HeaderComponent from '../../components/header/header.component';


interface RegisterScreenProps{
  navigation:any
}

const Register = (props:RegisterScreenProps) => {
  const register =()=>props.navigation.navigate("Home")


  return (
    <SafeAreaView>
      <ScrollView>
      <HeaderComponent title='Register'/>
        <View style={registerStyle.content  }>
          <TextInput label="Name" />
          <TextInput label="Email" keyboardType="email-address" />
          <TextInput
            label="Password"
            secureTextEntry={true}
            right={<TextInput.Icon name="eye-off" />}
          />
          <TextInput
            label="Confirm Password"
            secureTextEntry={true}
            right={<TextInput.Icon name="eye-off" />}
          />
          <TextInput label="Phone-Number" keyboardType="phone-pad" />
          <Button mode="contained" style={registerStyle.button} onPress={register}>Register</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Register;
