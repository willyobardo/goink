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
    const dados = navigation.getParam('dados');
    const tattoador = dados.inker;

    return(
      <Container>
       <HeaderGoInk abrindoDrawerPeloHeader={this.props.navigation.openDrawer}/>
        <Content>
       
          <Body style={styles.body}>
          	<Text style={styles.tattoadorName}>{tattoador.name}</Text>
            <Text style={styles.tattoadorAddress}>{tattoador.address}</Text>

            <Text>Local</Text>
            <Text>Data: {dados.date}</Text>
            <Text>Horario: {dados.duration} </Text>
            <Text>Duracao Media: {dados.duration}</Text>

            <Text key={key}>Tecnicas: 
              { dados.technique.map((item, key)=>(
                <Text key={key}> { item } </Text>
                )
              )}
            </Text>


            <Text key={key}>Indicacao: 
              { dados.body_part.map((item, key)=>(
                <Text key={key}> { item } </Text>
                )
              )}
            </Text>


            <Text>Tamanho da Tattoo: {dados.width}cm x {dados.height}</Text>
            <Text>Valor: R$ {dados.value}</Text>

            <Text>Importante</Text>

            <Text> Os Estudos GO INK, assim que comprados, somem do aplicativo para que a sua tatuagem
            seja exclusive.</Text>

            <Text> As informacoes aqui apresentadas (valor,técnica utilizada, data e horário) não podem sofrer
            mudanças.</Text>

            <Text> E aí? Partiu rabiscar?</Text>


            <Text Eu aceito os termos de uso</Text>
            <Text> Radio Button Aqui</Text>
           
            <Button rounded block dark>
              <Text>Finalizar compra</Text>
            </Button>

          </Body>
        </Content>
      </Container>
    )  
  }
}


<Container >
      <HeaderGoInk abrindoDrawerPeloHeader={this.props.navigation.openDrawer}/>
        <Content>
          <Image
            style={styles.coverTatuador}
            source={{uri: tattoador.cover}}
          />
          <Body style={styles.body}>
  
          </Body>
        </Content>
      </Container>

const styles = StyleSheet.create({
   wrapper: {
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:-100
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  loading:{
    width:50,
    height: 50
  },
  coverTatuador:{
    width:width,
    height:300
  },
  pictureTatuador:{
    width:200,
    height:200,
     alignItems: 'center',
    justifyContent: 'center',
  },
  tattoadorName:{
    marginTop:20
  },
  tattoadorAddress:{
    marginBottom:30
  },
  imageGrid:{
    width:width,
    height:200
  }

});
