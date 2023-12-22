import React, {useState} from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';

import {Appbar} from 'react-native-paper';

const HeaderComponent = (props: HeaderComponentParams) => {
  return (
    <Appbar>
      <Appbar.Content title={props.title} />
    </Appbar>
  );
};

export default HeaderComponent;

interface HeaderComponentParams {
  hasBackButton?: boolean;
  title: string;
}
