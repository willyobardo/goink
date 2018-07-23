import React from 'react';

import {createDrawerNavigator} from 'react-navigation';
import TattoerScreen from '../screens/Tattoer/TattoerScreen';
import TattoerAgendaScreen from '../screens/Tattoer/TattoerAgendaScreen';
import TattoerAddressScreen from '../screens/Tattoer/TattoerAddressScreen';


import DrawerButton from '../components/DrawerButton';

const TattoerDrawerNav = createDrawerNavigator ({
  Home:{
    screen: TattoerScreen
  },
  Agenda:{
    screen: TattoerAgendaScreen
  },
  Endereços:{
    screen: TattoerAgendaScreen
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

export default TattoerDrawerNav;