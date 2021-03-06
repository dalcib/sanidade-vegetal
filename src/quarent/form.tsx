import * as React from 'react';  //tslint:disable-line:no-unused-variable
import {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {observer} from 'mobx-react/native';
//import Combo from './../widgets/combo';
import {Button, TYPO } from 'react-native-material-design';
import {Actions} from 'react-native-router-flux';
//import {store} from './store';

type search = {search?(props?: any): void, quarentResults?(props?: any): void}
let actions = Actions as search;

@observer
export default class CefitiForm extends Component <{store: any}, {}> {
    render() {
       let quarentStore = this.props.store.quarent;
        //console.log(store, this.props.store)
       return (
           <View style={styles.container}>

               <View style={styles.subtitle}>
                   <Text style={styles.text}>
                       Consulta as Pragas Quarentenárias Regulamentadas
                    </Text>
               </View>

               <Subheader text="País de Origem:" />
               <Text style={styles.field}
                   onPress={() => actions.search({
                       source: 'listaPest', field: 'Pest',
                       onChange: this.props.store.quarent.handleChanges.bind(this), storeName: 'quarent'
                   })}
                   >{quarentStore.dados.Pest} </Text>

               <View style={styles.button}>
                   <Button text={'Consultar'} overrides={{ textColor: 'paperGreen', backgroundColor: 'paperGreen' }}
                       onPress={actions.quarentResults} />
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
