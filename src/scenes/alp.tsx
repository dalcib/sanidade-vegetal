import * as React from 'react';
//import {Component} from 'react';
import { View, Image, StyleSheet } from 'react-native';
//import {observer} from 'mobx-react/native'

let Mapa = () => <View style={styles.imageWrapper}>
                      <Image
                        style={{height: 350, width: null}}
                        source={require('./../../assets/moko_sigatoka_s.png')}
                        resizeMode={'contain'}
                        />
                 </View>;

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
});

//style={styles.image}
//resizeMode={'contain'}
//export default observer(Mapa);

export default Mapa;
