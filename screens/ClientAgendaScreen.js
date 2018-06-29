import React, { Component } from 'react';
import { StyleSheet, Image, Alert, Dimensions } from 'react-native';
import {  Content,
          Container,
          Button, 
          Header, 
          View, 
          DeckSwiper,  
          Thumbnail, 
          Text, 
          Left, 
          Right, 
          Body, 
          Icon, 
        } from 'native-base';
import HeaderGoInk from '../components/HeaderGoInk';



export default class ClientAgendaScreen extends React.Component {

  render() {
    return (
      <Container>
        
        <HeaderGoInk abrindoDrawerPeloHeader={this.props.navigation.openDrawer}/>

      </Container>
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
