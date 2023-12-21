import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {AddressStyle} from './address-style';
import {Button, TextInput} from 'react-native-paper';
import HeaderComponent from '../../components/header/header.component';

const AddressScreen = () => {
  const destinations: number[] = [1,2];

  return (
    <SafeAreaView>
      <HeaderComponent title="Header" />
      <View style={AddressStyle.marginHorizontal}>
        <TextInput label="origin" />
        {destinations.map((destination: number, index: number) => (
          <TextInput
            key={`destination${index}`}
            label="Destination"
            right={
            destinations.length>1 ?
            <TextInput.Icon name="close" color={AddressStyle.buttonIconRemove.color} />:null}
          />
        ))}
      </View>
      <View>
        <Button
          icon="plus"
          style={AddressStyle.buttonIconAdd}
          labelStyle={AddressStyle.buttonIconAddLabelStyle}></Button>
      </View>
      <Button
        style={AddressStyle.readyButtonStyle}
        mode="contained"
        labelStyle={AddressStyle.readyButtonLabelStyle}
        uppercase={false}>
        Ready
      </Button>
    </SafeAreaView>
  );
};

export default AddressScreen;
