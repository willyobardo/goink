import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import ClientTattooScreen from './screens/ClientTattooScreen';
import ClientAgendaScreen from './screens/ClientAgendaScreen';
import ClientTattoerProfile from './screens/ClientTattoerProfile';
import ClientInfoTattoo from './screens/ClientInfoTattoo';
import {createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import {Container, Content, Header, Icon} from 'native-base' 

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

/*const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  ClientTattoo: ClientTattooScreen
})*/

const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header>
      <Body>
       <Image
          style={styles.drawerImage}
          source={require('./img/loading.gif')}
        />
      </Body> 
    </Header>

    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)

const AppNavigator = createDrawerNavigator({
  Inicio: {
    screen: ClientTattooScreen
  },
  Agenda: {
    screen: ClientAgendaScreen
  },
  ClientTattoerProfile: {
    screen: ClientTattoerProfile
  },
  ClientInfoTattoo: {
    screen: ClientInfoTattoo
  }
})

/*const LoginNavigator = createStackNavigator({
    LoginScreen: LoginScreen,
    ClientTattoerProfile: ClientTattoerProfile
})*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerImage:{
    width:150,
    height: 150
  }

});

