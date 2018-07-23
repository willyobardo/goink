import React from 'react';
import {createStackNavigator} from 'react-navigation';

import ClientInfoAdd from '../screens/Client/ClientInfoAdd';
import ClientAddAddress from '../screens/Client/ClientAddAddress';


const ClientAddInfoNav = createStackNavigator ({
  ClientInfoAdd:{
    screen: ClientInfoAdd
  },
  ClientAddAddress:{
    screen: ClientAddAddress
  }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  });

export default ClientAddInfoNav;