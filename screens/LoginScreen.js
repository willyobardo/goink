import React from 'react';
import {Text, View, StyleSheet } from 'react-native';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';


export default class LoginScreen extends React.Component {
  render() {
    return (
       <View>
        <Button dark>
          <Text>LOGIN</Text>
        </Button>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
