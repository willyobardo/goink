import React, { Component } from 'react';
import { StyleSheet, Image, Alert, Dimensions, AsyncStorage } from 'react-native';
import {  Content,
          Container,
          Button, 
          Header, 
          View,
          Text, 
          Left, 
          Right, 
          Body, 
          Icon, 
        } from 'native-base';
import Swiper from 'react-native-swiper';
import HeaderGoInk from '../components/HeaderGoInk'

const { width, height } = Dimensions.get('screen');

export default class ClientInfoTattoo extends Component {
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('dados');

    return(
      <Container>
      <HeaderGoInk abrindoDrawerPeloHeader={this.props.navigation.openDrawer}/>
        <Content>
       

          	<Text>Nome do TAtuador</Text>
          	<Text>Endereco do Tatuador</Text>
      		<Text>Local</Text>
          	<Text>Data</Text>
			<Text>Horario</Text>
			<Text>Duracao Media</Text>
			<Text>Tecnicas</Text>
			<Text>Indicacao</Text>
			<Text>Tamanho da Tattoo</Text>
			<Text>Valor</Text>

			<Text>Importante</Text>

			<Text> Os Estudos GO INK, assim que comprados, somem do aplicativo para que a sua tatuagem
			seja exclusive.</Text>

			<Text> As informacoes aqui apresentadas (valor,técnica utilizada, data e horário) não podem sofrer
			mudanças.</Text>

			<Text> E aí? Partiu rabiscar?</Text>


			<Text> Eu aceito os termos de uso</Text>
			<Text> Radio Button Aqui</Text>
			<Button dark>
				<Text>Finalizar compra</Text>
			</Button>
			
        </Content>
      </Container>
    )  
  }
}

const styles = StyleSheet.create({
   wrapper: {
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  loading:{
    width:50,
    height: 50
  }

});
