import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import HeaderComponent from '../../components/header/header.component';
import { Card, Text } from 'react-native-paper';
import { deliveriesStyle } from './deliveries.style';

const DeliveriesScreen = () => {

const deliveries :number[]= [1,2]

  return (
    <SafeAreaView>
      <HeaderComponent title="Deliveries" />
      <FlatList
      data={deliveries}
      keyExtractor={(item,index)=>`deliveries${index}`}
      renderItem={({item,index})=>
        <Card style={{...deliveriesStyle.card, ...deliveriesStyle.cardStatus}}>
        <Card.Cover
        source={{uri:"https://evocreative.com/wp-content/uploads/blog-article-bg-googlemaps-1-350x145.jpg"}}
        />
        <Card.Title
        title="99/99/9999"
        subtitle="Delivery Person name"  
        right={()=><Text style={deliveriesStyle.price}>$ 30.00</Text>}
        />
      </Card> 
    }
      />
    
    </SafeAreaView>
  );
}; 

export default DeliveriesScreen;
