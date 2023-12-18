import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Appbar, Button, TextInput} from 'react-native-paper';
import { registerStyle } from './register.style';

const Register = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Appbar>
          <Appbar.BackAction />
          <Appbar.Content title="Register" />
        </Appbar>
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
          <Button mode="contained" style={registerStyle.button}>Register</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Register;
