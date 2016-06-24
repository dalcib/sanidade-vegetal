import * as React from 'react';
import {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {observer} from 'mobx-react/native'

@observer
export default class SearchPage extends Component <{},{}> {

  render() {
    return (
      <View style={styles.container}>
        <Text>Busca</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create<any>({
  container: {
    flex: 1
  }
})
