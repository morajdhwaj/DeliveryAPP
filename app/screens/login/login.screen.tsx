import React from 'react'
import { Alert, SafeAreaView, View } from 'react-native'
import { Button, Card, TextInput } from 'react-native-paper'
import { loginStyle } from './login.style'

interface LoginScreenProps{
  navigation:any
}

const LoginScreen = (props:LoginScreenProps) => {

const login =()=>props.navigation.navigate("Home")
const register =()=>props.navigation.navigate("Register")

  return (
    <SafeAreaView style={loginStyle.contain}>
     <View style={loginStyle.view}>
     <Card>
        <Card.Title title="Delivery App" titleStyle={loginStyle.cardTitle}></Card.Title>
        <Card.Content>
          <TextInput label='Email' keyboardType='email-address'></TextInput>
          <TextInput label='Password' secureTextEntry={true}></TextInput>
          <Button uppercase={false}  style={loginStyle.cardButton}>Forgot email/password</Button>
          <Button mode='contained' style={loginStyle.cardButton} onPress={login}>Login</Button>
          <Button style={loginStyle.cardButton} onPress={register}>Register</Button>
        </Card.Content>
      </Card>
     </View>
    </SafeAreaView>
  )
}

export default LoginScreen