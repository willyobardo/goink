import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, AsyncStorage } from 'react-native';
import {  Content,
          Container,
          View,
          Icon
        } from 'native-base';


const { width, height } = Dimensions.get('screen');

export default class ActivityIndicator extends Component {
  render() {
    return(
      <Container style={styles.content}>
      <Content>
        <Image
          style={styles.loading}
          source={require('../img/loading.gif')}
        />
        </Content>
      </Container>
    )  
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading:{
    width:50,
    height: 50
  }

});
