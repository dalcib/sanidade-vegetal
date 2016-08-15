import * as React from 'react';
import {Component} from 'react';
import {View, Text, StyleSheet, /*Picker, TouchableWithoutFeedback*/ } from 'react-native';
import {observer} from 'mobx-react/native';
//import Combo from './../widgets/combo';
import {Button, TYPO } from 'react-native-material-design';
import {Actions} from 'react-native-router-flux';
import {store as iStore} from './store';

@observer
export default class CefitiForm extends Component <{store: any}, {}> {
    render(): any {
      let pviaStore: iStore = this.props.store.pvia;
        //console.log(store, this.props.store)
      return (
          <View style={styles.container}>

              <View style={styles.subtitle}>
                  <Text style={styles.text}>
                      Consulta aos Produtos Vegetais com Importação Autorizada
                  </Text>
              </View>

              <Subheader text="País de Origem:"  />
                  <Text style={styles.field}
                  onPress={() => Actions.search({source:'listaOrig', field:'orig',
                  onChange:this.props.store.pvia.handleChanges.bind(this), storeName:'pvia'})}
                  >{pviaStore.dados.orig} </Text>

              <Subheader text="Produto:"  />
                  <Text style={styles.field}
                  onPress={() => Actions.search({source:'listaProd', field:'prod',
                  onChange:this.props.store.pvia.handleChanges.bind(this), storeName:'pvia'})}
                  >{pviaStore.dados.prod} </Text>

              <Subheader text="Gênero:"  />
                  <Text style={styles.field}
                  onPress={() => Actions.search({source:'listaGen', field:'gen',
                  onChange:this.props.store.pvia.handleChanges.bind(this), storeName:'pvia'})}
                  >{pviaStore.dados.gen} </Text>

              <Subheader text="Nome Científico:"  />
                  <Text style={styles.field}
                  onPress={() => Actions.search({source:'listaEsp', field:'esp',
                  onChange:this.props.store.pvia.handleChanges.bind(this), storeName:'pvia'})}
                  >{pviaStore.dados.esp} </Text>

              <View style={styles.button}>
              <Button value="Consultar"   text={'Consultar'} overrides={{textColor:'paperGreen', backgroundColor: 'paperGreen'}}
                  onPress={Actions.pviaResults} />
              </View>
          </View>
      );
  }
}

const styles = StyleSheet.create<any>({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'flex-start'
    },
    text: {
        //fontSize: 14,
        //textAlign: 'center',
        margin: 1,
        borderWidth: 1,
    },
    field: {
        width: 300,
        flex: 1,
        backgroundColor: '#FFFFFF',
        color: 'black',
        //flex: 0.3,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
        height: 15,
        fontSize: 16,
    },
    subtitle: {
        padding: 8
    },
    button: {
        height: 50,
        flex: 1,
    }
});

const Subheader = ({text}) => (
           <View
                style={substyles.container}
            >
                <Text
                    style={[styles.text, {
                        color: 'rgba(0,0,0,.54)',
                        fontWeight: '500'
                    }]}
                >
                    {text}
                </Text>
            </View>
);

//{paddingLeft: inset ? 72 : 16 }

const substyles = StyleSheet.create({
    container: {
        padding: 4,
        paddingLeft:  16
    },
    text: TYPO.paperFontBody1,
});
