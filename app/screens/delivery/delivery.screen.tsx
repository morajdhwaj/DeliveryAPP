import React from 'react';
import {SafeAreaView, View} from 'react-native';
import HeaderComponent from '../../components/header/header.component';
import MapView from 'react-native-maps';
import { deliveryStyle } from './delivery.style';
import { Avatar, Card, List, Text } from 'react-native-paper';

const DeliveryScreen = () => {
  return (
    <SafeAreaView style={deliveryStyle.flex}>
      <HeaderComponent title={'Delivery Details'} />
      <View  style={deliveryStyle.flex}>
        <MapView
          initialRegion={{
            latitude: 21.251385,
            longitude: 81.629639,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}  style={deliveryStyle.flex} ></MapView>
      </View>
      <Card>
     <Card.Title
     title="99/99/9999"
     right={()=><Text style={deliveryStyle.Price}>$ 30.00</Text>}
     />
     <Card.Content>
        <List.Item 
        title={"Mahesh"}
        description="53 delivery"
        left={()=><Avatar.Image size={52} source={{uri:"https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"}}/>}
        />
        <List.Item 
        title= "Origins"
        description="Origin street ,60"
        left={()=>
        <List.Icon icon="flag-outline"/> 
        }
        />
         <List.Item 
        title= "Destination"
        description="Destination street ,60"
        left={()=>
        <List.Icon icon="flag-outline"/>
        }
        />
     </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

export default DeliveryScreen;
