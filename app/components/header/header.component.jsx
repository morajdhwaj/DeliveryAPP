import react from 'react';
import {Appbar} from 'react-native-paper';

const HeaderComponent = (props: HeaderComponentParams) => {
  return (
    <Appbar>
      <Appbar.BackAction />
      <Appbar.Content title={props.title} />
    </Appbar>
  );
};

export default HeaderComponent;

interface HeaderComponentParams {
  title: string;
}
