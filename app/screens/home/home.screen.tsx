import React from 'react';
import {SafeAreaView, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {homeStyle} from './home.style';
import { FAB} from 'react-native-paper';
import { ConfirmDeliveryCardComponent } from '../../components/confirm-delivery-card/confirm-delicery-card-component';
import { SearchingDeliveryComponent } from '../../components/searching-delivery/searching-delivery-component';
import HeaderComponent from '../../components/header/header.component';

const HomeScreen = () => {
  const state: number = 3;

  return (
    <SafeAreaView style={homeStyle.flex}>
      <HeaderComponent title='Delivery App'/>
      <MapView
        style={homeStyle.flex}
        initialRegion={{
          latitude: 21.251385,
          longitude: 81.629639,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}>
        {state == 1 ? (
          <>
            <Marker
              description="Origin"
              coordinate={{latitude: 21.261385, longitude: 81.619639}}
            />
            <Marker
              description="Destination"
              coordinate={{latitude: 21.251381, longitude: 81.6199}}
            />
             <Marker
              description="Destination"
              coordinate={{latitude: 21.251381, longitude: 81.6199}}
            />
          </>
        ) : null}
         {state == 2 ? (
          <>
            <Marker
              description="Origin"
              coordinate={{latitude: 21.261385, longitude: 81.619639}}
            />
            <Marker
              description="Destination"
              coordinate={{latitude: 21.251381, longitude: 81.6199}}
            />
          </>
        ) : null}
      </MapView>
      {state == 1 ? <FAB icon="plus" style={homeStyle.fab} /> : null}
      {state == 2 ? (
       <ConfirmDeliveryCardComponent/>
      ) : null}

      {
        state==3 ? <SearchingDeliveryComponent/>:null
      }
    </SafeAreaView>
  );
};

export default HomeScreen;
