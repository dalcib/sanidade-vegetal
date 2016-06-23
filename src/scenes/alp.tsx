import * as React from 'react';
import {Component} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
//import {observer} from 'mobx-react/native'

var Mapa = () => <View style={styles.imageWrapper}>
                      <Image 
                        source={require("./../../assets/moko_sigatoka_s.png")} 
                        resizeMode={'stretch'} 
                        style={styles.image}/>
                 </View>


let styles = StyleSheet.create<any>({
  imageWrapper: {
    flex: 1,
    alignItems: 'stretch'
  },
  image: {
    flex: 1,
      position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  }
})

//resizeMode={'contain'}
//export default observer(Mapa);
export default Mapa;
