import * as React from 'react';
import {Component} from 'react';
import {View, Text, StyleSheet, /*Picker, TouchableWithoutFeedback */} from 'react-native';
import {observer} from 'mobx-react/native';
import Combo from './../widgets/combo';
//import Typeahead from './../widgets/typeahead'
//import GooglePlacesAutocomplete from './../widgets/googleautocomplete'
import {Button, TYPO } from 'react-native-material-design';
import {Actions} from 'react-native-router-flux';
import {cefitiStore} from './store';
//import uiStore from './../store'

//onPress={()=> Actions.search({source:'listaNomesSci',   onChangeText: (text)=>{this.props.store.ui.searchValue = text}   })}
//onChangeText: (text)=>{store.handleChanges({target:{value:text, name:'nomeSci'}})}

@observer
export default class CefitiForm extends Component <{store: any}, {}> {
  render(): any {
    let store: cefitiStore = this.props.store.cefiti;
    return (
        <View style={styles.container}>

            <View style={styles.subtitle}>
                <Text style={styles.text}>
                    Consulta ao Catalogo da Exigências Fitossanitárias para o Trânsito Interestadual
                </Text>
            </View>

            <Subheader text="Espécie Vegetal (nome científico):"  />
            <Text style={styles.field}
                onPress={() => Actions.search({
                    source: 'listaNomesSci', field: 'hospSci',
                    onChange: this.props.store.cefiti.handleChanges.bind(this), storeName: 'cefiti'
                })}
                >{store.dados.hospSci} </Text>

            <Subheader text="Espécie Vegetal (nome vulgar):"  />
            <Text style={styles.field}
                onPress={() => Actions.search({
                    source: 'listaNomesVul', field: 'hospVul',
                    onChange: this.props.store.cefiti.handleChanges.bind(this), storeName: 'cefiti'
                })}
                >{store.dados.hospVul} </Text>

            <Subheader text="Parte:"  />
            <Combo
                source={store.partes} itemLabel={''} itemValue={''}  value={store.dados.prod}
                name={'prod'} onValueChange={store.handleChanges} />

            <Subheader text="Origem:" />
            <Combo
                source={store.estados} itemLabel={'estado'} itemValue={'UF'}
                value={store.dados.orig} name={'orig'} onValueChange={store.handleChanges} />

            <Subheader text="Destino:" />
            <Combo
                source={store.estados} itemLabel={'estado'} itemValue={'UF'}
                value={store.dados.dest} name={'dest'} onValueChange={store.handleChanges} />

            <View style={styles.button}>
                <Button value="Consultar"   text={'Consultar'} overrides={{ textColor: 'paperGreen', backgroundColor: 'paperGreen' }}
                    onPress={Actions.cefitiResults} />
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