
import React from 'react';
import { Provider as PaperProvider ,TextInput} from 'react-native-paper';
import LoginScreen from './app/screens/login/login.screen';
import { Theme } from './app.style';




function App(): JSX.Element {
 

  return (
    <PaperProvider theme={Theme}>
    <LoginScreen/>
      </PaperProvider>
  );
}
export default App;
