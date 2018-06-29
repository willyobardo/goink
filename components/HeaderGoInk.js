import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Content, Container, Button, Header, View, Text, Left, Body, Icon, Right } from 'native-base';

export default class HeaderGoInk extends React.Component {

  constructor(props) {
    super(props);
    this.abrindoDrawerPeloHeader = props.abrindoDrawerPeloHeader.bind(this);
  }

  render() {
    return (
        <Header style={{
          display:'flex',
                      shadowOffset: {height: 0, width: 0},
                      shadowOpacity: 0,
                      backgroundColor: '#000',
                      flexDirection: 'row'
                    }}>
            <Left>
              <Icon name='ios-menu'
                  style={{
                            color: '#fff'
                          }} 
                    onPress={()=> this.props.abrindoDrawerPeloHeader()}

              />
            </Left>
            <Right>

              <Icon name='arrow-back'
                  style={{
                            color: '#fff'
                          }} 
                    onPress={() => { this.props.navigation.goBack() }}

              />

            </Right>

        </Header>
    );
  }
}