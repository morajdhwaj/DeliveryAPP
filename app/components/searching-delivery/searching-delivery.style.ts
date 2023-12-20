import { StyleSheet } from "react-native";
import { Theme } from "../../../app.style";

export const searchingDeliveryStyle= StyleSheet.create({
    icon: {
        color: Theme.colors.primary,
        marginTop: 20,
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
})