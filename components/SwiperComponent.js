import React, { Component } from 'react';
import { StyleSheet, Image, Alert, Dimensions } from 'react-native';
import {  Content,
          Container,
          Button,  
          View,  
          Thumbnail, 
          Text, 
          Left, 
          Right, 
          Icon
        } from 'native-base';
import Swiper from 'react-native-swiper';


const { width, height } = Dimensions.get('screen');

export default class SwiperComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inkerData:[],
      nomeTatuador: '',
      enderecoTatuador: '',
      idTatuador: 3,
      tattoerData:[]
      }
     this.fotos = this.props.fotos;

  }

  mudandoSlide(key){
    let atualSlide = this.props.fotos.filter((item) => item.id === key)[0]
    //carregar dados automaticamente do get Fotos Data
    //this.setState({nomeTatuador: atualSlide.inker.name, enderecoTatuador: atualSlide.inker.address})
  

    if (atualSlide != undefined) {
      this.setState({tattoerData:atualSlide})
      this.setState({nomeTatuador:atualSlide.inker.name})
      this.setState({enderecoTatuador:atualSlide.inker.address})
      this.setState({idTatuador:atualSlide.id})
      //console.warn(atualSlide.inker.name);
    }
  }
  
  onOpenTattooer = () => {
      this.props.navigation.navigate('ClientTattoerProfile', {dados: this.state.tattoerData});
  };

   onOpenTattoo = () => {
      this.props.navigation.navigate('ClientInfoTattoo', {dados: this.state.tattoerData});
  };
render() {
    return(
        <Container>
        <View style={styles.headerTatooer}> 
          <View style={styles.headerText}>
            <Text>{this.state.nomeTatuador}</Text>
            <Text>{this.state.enderecoTatuador}</Text>
          </View>
          <Right>
           <Icon onPress={()=> this.onOpenTattooer()} name="add-circle"/>
          </Right>
        </View>

          <Swiper 
            showsButtons={false}
            showsPagination={false}
            onIndexChanged={key => {
                this.mudandoSlide(key)
              }}
            loop={false}
          >
          
              {this.props.fotos.map((item) => {
                return (
                  <View key={item.id} style={styles.slideTattoos} >
                     
                     <Image
                        style={{width:width, height: height}}
                        source={{uri: item.images}}
                      />

                       <Button dark style={styles.buttonEuquero} onPress={()=> this.onOpenTattoo()}>
                          <Text>Eu quero!!!</Text>
                        </Button>
                  </View>
                )
              })}
          </Swiper>
        </Container>
    )
  }
}


const styles = StyleSheet.create({
  headerTatooer: {
    display:'flex',
    flexDirection:'row',
    backgroundColor: '#fff',
    padding: 20

  },
   headerText:{
    justifyContent:'center',
    alignItems:'center',
  },
  buttonEuquero:{
    position: 'absolute',
    bottom: 50,
    right: 20
  },
   wrapper: {
  },
  slideTattoos: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
