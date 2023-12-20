import {StyleSheet} from 'react-native';
import {Theme} from '../../../app.style';
import {white} from 'react-native-paper/lib/typescript/src/styles/colors';

export const homeStyle = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: 'white',
  },
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 16,
  },
  markerImage: {
    width: 35,
    height: 35,
  },
  icon: {
    color: Theme.colors.primary,
    marginTop: 20,
  },
  cancelButton: {
    marginBottom: 10,
  },
  flexCenterColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    margin: 20,
    marginTop:40,
    textAlign:"center",
  },
  cancelDeliveryButton:{
    position:"absolute",
    margin:"2%",
    bottom:0,
    width:"96%"
  }
});
