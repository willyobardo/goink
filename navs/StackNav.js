import React from 'react';
import {createStackNavigator} from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import TattoerDrawerNav from './TattoerDrawerNav';
import DrawerNav from './DrawerNav';

const StackNav = createStackNavigator ({
  Login: {
    screen:LoginScreen
  },
  App:{
    screen:DrawerNav
  },
  TattoerApp:{
    screen:TattoerDrawerNav
  }
}, {
  headerMode: 'none',
});

export default StackNav;