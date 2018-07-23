import React from 'react';

import {createDrawerNavigator} from 'react-navigation';
import ClientTattooNav from './ClientTattooNav';
import ClientAgendaNav from './ClientAgendaNav';
import ClientAddressNav from './ClientAddressNav';
import ClientCardNav from './ClientCardNav';
import DrawerButton from '../components/DrawerButton';

const DrawerNav = createDrawerNavigator ({
  Home:{
    screen: ClientTattooNav
  },
  Agenda:{
    screen: ClientAgendaNav
  },
  Cartões:{
    screen: ClientAgendaNav
  },
  },
  {
    navigationOptions: ({ navigation }) =>({
      title: '',
      headerLeft: <DrawerButton navigation={navigation}/>,
      headerMode: 'screen',
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

export default DrawerNav;