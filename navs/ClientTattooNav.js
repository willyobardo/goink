import React from 'react';
import {createStackNavigator} from 'react-navigation';

import ClientTattooScreen from '../screens/Client/ClientTattooScreen';
import ClientAgendaScreen from '../screens/Client/ClientAgendaScreen';
import ClientTattoerProfile from '../screens/Client/ClientTattoerProfile';
import ClientInfoTattoo from '../screens/Client/ClientInfoTattoo';
import ClientPayment from '../screens/Client/ClientPayment';
import DrawerButton from '../components/DrawerButton';

const ClientTattooNav = createStackNavigator ({
  ClientTattooScreen:{
    screen: ClientTattooScreen,
  },
  ClientTattoerProfile: {
    screen:ClientTattoerProfile
  },
  ClientInfoTattoo:{
  	screen:ClientInfoTattoo
  },
  ClientPayment:{
  	screen: ClientPayment
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

export default ClientTattooNav;