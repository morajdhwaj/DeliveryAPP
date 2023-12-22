
import React from 'react';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import { Theme } from './app.style';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './app/screens/login/login.screen';
import HomeScreen from './app/screens/home/home.screen';
import Register from './app/screens/register/register.screen';
import AddressScreen from './app/screens/address/adress.screen';
import DeliveriesScreen from './app/screens/deliveries/delivery.screen';
import DeliveryScreen from './app/screens/delivery/delivery.screen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
 

  return (
    <PaperProvider theme={Theme}>
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{headerShown:false}} initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="DeliveryRoute" component={AddressScreen} />
        <Stack.Screen name="Deliveries" component={DeliveriesScreen} />
        <Stack.Screen name="Delivery" component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
      </PaperProvider>
  );
}
export default App;
