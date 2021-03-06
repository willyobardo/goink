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
          Icon,
          Body
        } from 'native-base';
import Swiper from 'react-native-swiper';


const { width, height } = Dimensions.get('screen');

export default class SwiperComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inkerData:[],
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

    console.warn(this.state.tattoerData)
  }
  
  onOpenTattooer(idTatuadorProfile){
      this.props.navigation.navigate('ClientTattoerProfile', {dados: idTatuadorProfile});
  };

  onOpenTattoo(idTattooInfo){
      this.props.navigation.navigate('ClientInfoTattoo', {dados: idTattooInfo});
  };
render() {
    return(
        <Container>
       

          <Swiper 
            showsButtons={false}
            showsPagination={false}
            onIndexChanged={key => {
                this.mudandoSlide(key)
              }}
            loop={false}
          >
          
              {this.props.fotos.map((item, key) => {
                return (
                  <View key={ key } style={styles.slideTattoos}>

                    <View style={styles.headerTatooer}> 
                      <View style={styles.headerText}>
                      {console.warn(item.inker)}
                        <Text>{item.inker.name}</Text>
                        <Text>{item.inker.address}</Text>
                      </View>
                      <Right>
                       <Icon onPress={()=> this.onOpenTattooer(item.inker)} name="add-circle"/>
                      </Right>
                    </View>


                  <Body >
                     <Image
                        style={{width:width, height: height}}
                        source={{uri: item.images}}
                      />
                       <Button transparent style={ styles.buttonEuquero } onPress={()=> this.onOpenTattoo(item)}>
                         <Image style={ styles.imageInsideEuquero } source={require('../img/btn-eu-quero.png')}/>
                        </Button>
                  </Body>
                  </View>
                )
              })}
          </Swiper>
        </Container>
    )
  }
}


const styles = StyleSheet.create({
  slideTattoos: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  headerTatooer: {
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
  imageInsideEuquero:{
    width:100,
    height:100
  },
   wrapper: {
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
