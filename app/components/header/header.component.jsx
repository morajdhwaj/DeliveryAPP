import React from 'react';
import {Appbar, Menu} from 'react-native-paper';
import {headerComponentStyle} from './header-component-style';

const HeaderComponent = (props: HeaderComponentParams) => {
  return (
    <Appbar>
      {/* {props.hasBackButton ? ( */}
      <Appbar.BackAction />
      {/* ) : (
        <Menu
          visible={true}
          onDismiss={() => {}}
          anchor={
            <Appbar.Action
              icon="menu"
              color={headerComponentStyle.menu.color}
            />
          }
        />
      )} */}
      <Appbar.BackAction />
      <Appbar.Content title={props.title} />
    </Appbar>
  );
};

export default HeaderComponent;

interface HeaderComponentParams {
  hasBackButton?: boolean;
  title: string;
}
