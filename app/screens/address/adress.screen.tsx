import React from "react";
import { SafeAreaView, View } from "react-native";
import HeaderComponent from "../../components/header/header.component";

import { headerComponentStyle } from "../../components/header/header-component-style";
import { AddressStyle } from "./address-style";
import { Button, TextInput } from "react-native-paper";


const AddressScreen = ()=>{
    return(
        <SafeAreaView >
            <HeaderComponent title="Header" />
            <View style={AddressStyle.marginHorizontal}>
            <TextInput label="origin"/>
            <TextInput label="Destination"/>
            </View>
            <View>
                <Button icon="plus" style={AddressStyle.buttonIconAdd} labelStyle={AddressStyle.buttonIconAddLabelStyle}>

                </Button>
            </View>
            <Button style={AddressStyle.readyButtonStyle} mode="contained" labelStyle={AddressStyle.readyButtonLabelStyle} uppercase={false}>Ready</Button>
            
        </SafeAreaView>
    )
}

export default AddressScreen