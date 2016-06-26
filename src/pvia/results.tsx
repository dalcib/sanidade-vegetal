import * as React from 'react'
import {Component} from 'react'
import {ScrollView, View, Text, StyleSheet, Picker, Linking, TouchableWithoutFeedback } from 'react-native'
import {Button, TYPO, Subheader, List, Divider } from 'react-native-material-design'
import {store as pviaStore} from './store'
import {pvia} from './pviaDb'



function Result({store}) {
  const pviaStore:pviaStore = store.pvia
      return (
    <ScrollView>
      <View>
          <Text style={styles.title} >Requisitos Fitossanitários para Importação  </Text>

          {pviaStore.result.map((item:pvia, i:number)=>{ return (
              <View key={i}> 
                  <Divider />
                  <View style={styles.row}><Text style={styles.field}>Produto Vegetal: </Text><Text>{item.prod}</Text></View>
                  <View style={styles.row}><Text style={styles.field}>Nome Científico: </Text><Text>{item.esp}</Text></View>
                  <View style={styles.row}><Text style={styles.field}>Parte Importada: </Text><Text>{item.parte}</Text></View>
                  <View style={styles.row}><Text style={styles.field}>Categoria de Risco: </Text><Text>{item.cat}</Text></View>
                  <View style={styles.row}><Text style={styles.field}>Classe: </Text><Text>{item.clas}</Text></View>
                  <View style={styles.row}><Text style={styles.field}>Uso Proposto: </Text><Text>{item.uso}</Text></View>
                  <View style={styles.row}><Text style={styles.field}>País de Origem: </Text><Text>{item.orig}</Text></View>
                  <View >
                    <Text style={styles.title}>Requisitos Fitossanitários: </Text>
                    <Text>{item.req}</Text>
                  </View>
             </View>
          )})}
      </View>
    </ScrollView>)
}

const styles = StyleSheet.create<any>({
    container: {
        flex: 1,
        padding: 8,
        margin: 8,
        //justifyContent: 'center',
        //alignItems: 'flex-start'
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        borderWidth: 10,
        fontWeight: 'bold'
        //fontStyle : 'italic' //normal
    },
    field: {
        //fontSize: 18,
        textAlign: 'right',
        //margin: 10,
        //borderWidth: 10,
        fontWeight: 'bold'
        //fontStyle : 'italic' //normal
    },
    row: {
        flexDirection:'row' 
    }
});


export default Result

