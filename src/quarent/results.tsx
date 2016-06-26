import * as React from 'react'
import {Component} from 'react'
import {ScrollView, View, Text, StyleSheet, Picker, Linking, TouchableWithoutFeedback } from 'react-native'
import {Button, TYPO, Subheader, List, Divider } from 'react-native-material-design'
import {store as quarentStore} from './store'
import {quarent} from './quarentDb'



function Result({store}) {
  const quarentStore:quarentStore = store.quarent
      return (
    <ScrollView>
      <View>
          <Text style={styles.title} >Regulamentações para a Praga {quarentStore.result[0].Pest}   </Text>

          {pviaStore.result.map((item:quarent, i:number)=>{ return (
              <View key={i}> 
                  <Divider />
                  <View style={styles.row}><Text style={styles.field}>Legislação: </Text><Text>{item.Leg}</Text></View>
                  <View style={styles.row}><Text style={styles.field}>Cultura: </Text><Text>{item.Cult}</Text></View>
                  <View style={styles.row}><Text style={styles.field}>Espécie: </Text><Text>{item.Esp}</Text></View>
                  <View style={styles.row}><Text style={styles.field}>Produto: </Text><Text>{item.Prod}</Text></View>
                  <View style={styles.row}><Text style={styles.field}>País: </Text><Text>{item.Pais}</Text></View>
                  <View style={styles.row}><Text style={styles.field}>Revogada: </Text><Text>{item.Revg}</Text></View>
                  <View style={styles.row}><Text style={styles.field}>Processo: </Text><Text>{item.Proc}</Text></View>
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

