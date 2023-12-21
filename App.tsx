
import React from 'react';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import LoginScreen from './app/screens/login/login.screen';
import { Theme } from './app.style';
import Register from './app/screens/register/register.screen';
import HomeScreen from './app/screens/home/home.screen';
import AddressScreen from './app/screens/address/adress.screen';
import DeliveryScreen from './app/screens/delivery/delivery.screen';






function App(): JSX.Element {
 

  return (
    <PaperProvider theme={Theme}>
    {/* <LoginScreen/> */}
    {/* <Register/> */}
    {/* <HomeScreen/> */}
    {/* <AddressScreen/> */}
   <DeliveryScreen/>
      </PaperProvider>
  );
}
export default App;
