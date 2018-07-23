import React from 'react';
import {createStackNavigator} from 'react-navigation';

import ClientTattooScreen from '../screens/Client/ClientTattooScreen';
import ClientAgendaScreen from '../screens/Client/ClientAgendaScreen';
import ClientAddressScreen from '../screens/Client/ClientAddressScreen';
import DrawerButton from '../components/DrawerButton';

const ClientAddressNav = createStackNavigator ({
  Endereços:{
    screen: ClientAddressScreen,
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

export default ClientAddressNav;