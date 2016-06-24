import * as React from 'react';
import {Component} from 'react';
import {TextInput, View, ListView, Image, Text, Dimensions, TouchableHighlight, TouchableWithoutFeedback, Platform, ActivityIndicatorIOS, ProgressBarAndroid, PixelRatio} from 'react-native';
import {observer} from 'mobx-react/native'

/*@observer
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
})*/




const defaultStyles = {
  container: {
    flex: 1,
  },
  textInputContainer: {
    /*backgroundColor: '#C9C9CE',
    height: 44,
    borderTopColor: '#7e7e7e',
    borderBottomColor: '#b5b5b5',*/
    //borderTopWidth: 1 / PixelRatio.get(),
    //borderBottomWidth: 1 / PixelRatio.get(),
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    //height: 28,
    /*borderRadius: 5,
    paddingTop: 4.5,
    paddingBottom: 4.5,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 8,
    marginRight: 8,*/
    //marginTop: 7.5,
    //fontSize: 15,
  },
  /*poweredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  powered: {
    marginTop: 15,
  },*/
  listView: {
    // flex: 1,
  },
  row: {
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: '#FFFFFF',
    padding: 4,
    height: 24,
    flexDirection: 'row',
  },
  separator: {
    //height: 1,
    //backgroundColor: '#c8c7cc',
  },
  description: {
  },
  /*loader: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 20,
  },
  androidLoader: {
    marginRight: -15,
  },*/
};

const SearchList = React.createClass({

  propTypes: {
    onPress: React.PropTypes.func,
    minLength: React.PropTypes.number,
    fetchDetails: React.PropTypes.bool,
    autoFocus: React.PropTypes.bool,
    getDefaultValue: React.PropTypes.func,
    styles: React.PropTypes.object,
    enableEmptySections: React.PropTypes.bool,
    source: React.PropTypes.array,
    store: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      onPress: () => {},
      minLength: 0,
      fetchDetails: false,
      autoFocus: false,
      getDefaultValue: () => '',
      timeout: 20000,
      onTimeout: () => console.warn('google places autocomplete: request timeout'),
      styles: {
      },
    };
  },

  getInitialState() {
    const ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2})
    return {
      text: this.props.getDefaultValue(),
      dataSource: ds.cloneWithRows(this.props.source),
      listViewDisplayed: false,
    };
  },


  _onPress(rowData) {
    this.setState({
        text: rowData,
      });
      //this._onBlur();
  },

  _request(text) {
    if (text.length >= this.props.minLength) {
      if (text === '') {return []; }
      const { source } = this.props;
      const regex = new RegExp(`${text.trim()}`, 'i');
      let result = source.filter(h => h.search(regex) >= 0);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(result),
      });
    }
  },

  _onChangeText(text) {
    this._request(text);
    this.setState({
      text: text,
      listViewDisplayed: true,
    });
  },

  _renderRow(rowData = {}) {
    //rowData.description = rowData.description || rowData.formatted_address || rowData.name;
    return (
      <TouchableHighlight
        onPress={() =>
          this._onPress(rowData)
        }
        underlayColor="#c8c7cc"
      >
        <View>
          <View style={[defaultStyles.row, this.props.styles.row]}>
            <Text
              style={[{flex: 1}, defaultStyles.description, this.props.styles.description]}
              numberOfLines={1}
            >
              {rowData}
            </Text>
          </View>
          <View style={[defaultStyles.separator, this.props.styles.separator]} />
        </View>
      </TouchableHighlight>
    );
  },




  render() {
    return (
      <View
        style={[defaultStyles.container, this.props.styles.container]}
      >
          <Text>{this.props.store.ui.searchValue}</Text>
          <ListView
            keyboardShouldPersistTaps={true}
            keyboardDismissMode="on-drag"
            style={[defaultStyles.listView, this.props.styles.listView]}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            automaticallyAdjustContentInsets={false}
            {...this.props}
          />
      </View>
    );
  },
});



export default SearchList