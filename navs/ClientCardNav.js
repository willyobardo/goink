import React from 'react';
import {createStackNavigator} from 'react-navigation';

import ClientCardScreen from '../screens/Client/ClientCardScreen';

import DrawerButton from '../components/DrawerButton';

const ClientCardNav = createStackNavigator ({
  Cartões:{
    screen: ClientCardScreen,
  }
  },
  {
    navigationOptions: ({ navigation }) =>({
      title: '',
      headerLeft: <DrawerButton navigation={navigation}/>,
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  }
);

export default ClientCardNav;