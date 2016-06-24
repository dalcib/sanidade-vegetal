import * as React from 'react';
import {Component} from 'react';
import {View, Text, StyleSheet, Picker } from 'react-native';
import {observer} from 'mobx-react/native'
import Combo from './../widgets/combo'
import Typeahead from './../widgets/typeahead'
import GooglePlacesAutocomplete from './../widgets/googleautocomplete'
import {Button} from 'react-native-material-design'
import {Actions} from 'react-native-router-flux'
//import store from './store'
//import uiStore from './../store'


//onChangeText: (text)=>{store.handleChanges({target:{value:text, name:'nomeSci'}})}

@observer
export default class Avatars extends Component <{store:any},{}> {
    render() {
       let store = this.props.store.cefiti
        //console.log(store, this.props.store)
        return (
            <View style={styles.container}>
                <Button value="Nome Sci" onPress={()=> Actions.search({source:store.listaNomesSci, 
                onChangeText: (text)=>{this.props.store.ui.searchValue = text}   
                })}  text={''}/>
                <Text style={styles.text}>
                    This component is an example of a nested route. It is a child of 'welcome'.
                </Text>
                <Text style={styles.text}>Espécie Vegetal (nome científico):</Text>
                <GooglePlacesAutocomplete source={store.listaNomesSci}  />
                <Text style={styles.text}>Espécie Vegetal (nome vulgar):</Text>
                <GooglePlacesAutocomplete source={store.listaNomesVul}  />
                <Text style={styles.text}>Parte:</Text>
                <Combo 
                  source={store.partes} itemLabel={''} itemValue={''}  value={store.dados.prod} 
                  name={'prod'} onValueChange={store.handleChanges} />
                <Text style={styles.text}>Origem:</Text>
                <Combo 
                  source={store.origem} itemLabel={'estado'} itemValue={'UF'} 
                  value={store.dados.orig} name={'orig'} onValueChange={store.handleChanges} />
                <Text style={styles.text}>Destino:</Text>
                <Combo 
                  source={store.destino} itemLabel={'estado'} itemValue={'UF'} 
                  value={store.dados.dest} name={'dest'} onValueChange={store.handleChanges} />
            </View>
        );
    }
}
/*                <Text style={styles.text}>Espécie Vegetal (nome científico):</Text>
                <Typeahead source={store.listaNomesSci} value={store.dados.hospSci} />
                <Text style={styles.text}>Espécie Vegetal (nome vulgar):</Text>
                <Typeahead source={store.listaNomesVul} value={store.dados.hospVul} />*/
/*                <Picker
                  name={'orig'}
                  style={styles.picker}
                  selectedValue={store.dados.orig}
                  onValueChange={store.handleChanges.bind(this)}
                >
                      <Picker.Item label="Mato Grosso" value="MT"  />
                      <Picker.Item label="Goías" value="GO"  />
                      <Picker.Item label="Mato Grosso do Sul" value="MS"  />
                      <Picker.Item label="Mato Grosso do Norte" value="MN"  />
                </Picker>*/

const styles = StyleSheet.create<any>({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'flex-start'
    },
    text: {
        fontSize: 14,
        //textAlign: 'center',
        //margin: 0,
    },
});

