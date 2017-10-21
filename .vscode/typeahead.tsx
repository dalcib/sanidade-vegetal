import * as React from 'react'; //tslint:disable-line:no-unused-variable
import { Component } from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import AutoComplete from 'react-native-autocomplete-input';
//import {exig,dados, estados, hospedeiro } from './../cefiti/cefiti'
//import {db, hospedeiros} from './../cefiti/db'

/*export default class Typeahead extends Component<{},{hosp?:any, query:string}> {
  constructor(props) {
    super(props);
    this.state = {
      hosp: hospedeiros,
      query: 'x',
    };
  }

  _findHosp(query) {
    if (query === '') {
      return [];
    }
    const { hosp } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return hosp.filter(h => h.nomeSci.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const comp = (s, s2) => s.toLowerCase().trim() === s2.toLowerCase().trim();
    const hosps = this._findHosp(query);
    return (
      <AutoComplete
        data={hosps.length === 1 && comp(query, hosps[0].nomeSci) ? [] : hosps}
        defaultValue={query}
        onChangeText={(text:string) => this.setState({query: text})}
        containerStyle={styles.autocompleteContainer}
        renderItem={(data:hospedeiro) => (
          <TouchableOpacity onPress={() => 
              this.setState({query: data.nomeSci})
            }
          >
            <Text style={styles.itemText}>{data.nomeSci}</Text>
          </TouchableOpacity>
        )}
      />
    );
  }
}*/

export default class Typeahead extends Component <{source: string[], value: string}, {source?: string[], query: string}> {
  constructor(props: any) {
    super(props);
    this.state = {
      source: props.source,
      query: ''
    };
  }

  _findSource(query: string): [] {
    if (query === '') {return []; }
    const { source } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return source.filter(h => h.search(regex) >= 0);
  }

  render(): any {
    const { query } = this.state;
    let { value } = this.props;
    const comp = (s, s2) => s.toLowerCase().trim() === s2.toLowerCase().trim();
    const filteredSource = this._findSource(query);
    return (
        <AutoComplete
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          listStyle={styles.listStyle}
          style={styles.textInputStyle}
          data={filteredSource.length === 1 && comp(query, filteredSource[0]) ? [] : filteredSource}
          defaultValue={query}
          onChangeText={(text:string) => this.setState({query: text})}
          renderItem={data => (
            <TouchableOpacity onPress={() => {
                this.setState({query: data, source:[]});
                value = data;
            }}>
              <Text style={styles.itemText}>{data}</Text>
            </TouchableOpacity>
          )}
        />
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    /*left: 0,
    position: 'absolute',
    right: 0,
    top: 20*/
  },
  inputContainerStyle: {},
  listStyle: {},
  textInputStyle: {},
  itemText: {
    fontSize: 15,
    margin: 2
  },
});

/*
//adb logcat *:S ReactNative:V ReactNativeJS:V
import React, { Component } from 'react';
import AutoComplete from 'react-native-autocomplete-input';
import AutocompleteExample from './AutocompleteExample';
import SimpleAutocomplete from './SimpleAutocomplete';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const AwesomeProject = () => <View style={styles.container}>
              <Text>Nome Científico</Text>
              <MyAutocomplete source={hospedeiros} field={'nomeVul'} />
              <Text>Nome Comum</Text>
              <MyStringAutocomplete source={hospeddd}  />
            </View>

class MyAutocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: props.source,
      query: 'x'
    };
  }

  _findSource(query) {
    if (query === '') {return []; }
    const { source } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return source.filter(h => h[this.props.field].search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const comp = (s, s2) => s.toLowerCase().trim() === s2.toLowerCase().trim();
    const filteredSource = this._findSource(query);
    return (
        <AutoComplete
          data={filteredSource.length === 1 && comp(query, filteredSource[0][this.props.field]) ? [] : filteredSource}
          defaultValue={query}
          onChangeText={text => this.setState({query: text})}
          renderItem={data => (
            <TouchableOpacity onPress={() => this.setState({query: data[this.props.field], hosp:[]})}  >
              <Text>{data[this.props.field]}</Text>
            </TouchableOpacity>
          )}
        />
    );
  }
}

const styles = StyleSheet.create({
  field: {
    borderColor: '#48BBEC',
    borderWidth: 1,
    height: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/
