import {StyleSheet} from 'react-native';
import { Theme } from '../../../app.style';

export const AddressStyle = StyleSheet.create({
  marginHorizontal: {
    marginHorizontal: 10,
  },
  buttonIconAdd: {
    position: 'absolute',
    right: -20,
    top: 2,
  },
  buttonIconAddLabelStyle: {
    fontSize: 30,
  },
  readyButtonStyle: {
    margin: 10,
    marginTop: 80,
    height: 50,
    paddingVertical: 3,
  },
  readyButtonLabelStyle: {
    fontSize: 18,
  },
  buttonIconRemove:{
    color:Theme.color.primary,
  }
});
