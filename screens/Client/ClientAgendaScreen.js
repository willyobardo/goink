import React, { Component } from 'react';
import { StyleSheet, Image, Alert, Dimensions, AsyncStorage, Button} from 'react-native';
import {  Content,
          Container,
          Header, 
          View, 
          DeckSwiper,  
          Thumbnail, 
          Text, 
          Left, 
          Right, 
          Body, 
          Icon
        } from 'native-base';
import SwiperComponent from '../../components/SwiperComponent';
import ActivityIndicator from '../../components/ActivityIndicator';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('screen');


export default class ClientAgendaScreen extends Component {


  render() {
  
    return(
      <Container>


        <Text> Voce ainda não possui nenhum estudo marcado</Text>



        {/*<Content scrollEnabled={false}>
          <SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert('Add')}>
                <Icon active name="pen" />
              </Button>
            }
            body={
              <View>
                <Text>Rua Endereço</Text>
              </View>
            }
            right={
              <Button danger onPress={() => alert('Trash')}>
                <Icon active name="trash" />
              </Button>
            }
          />
        </Content>*/}
      </Container>
    )  
  }
}

const styles = StyleSheet.create({
   wrapper: {
    backgroundColor:'#fff'
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});


