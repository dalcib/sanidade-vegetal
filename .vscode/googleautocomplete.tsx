import * as React from 'react';
//const ReactNative = require('react-native');
import {TextInput, View, ListView, Text, TouchableHighlight} from 'react-native';
//const Qs = require('qs');

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

const GooglePlacesAutocomplete = React.createClass({

  propTypes: {
    placeholder: React.PropTypes.string,
    onPress: React.PropTypes.func,
    minLength: React.PropTypes.number,
    fetchDetails: React.PropTypes.bool,
    autoFocus: React.PropTypes.bool,
    getDefaultValue: React.PropTypes.func,
    styles: React.PropTypes.object,
    textInputProps: React.PropTypes.object,
    enableEmptySections: React.PropTypes.bool,
    source: React.PropTypes.array
  },

  getDefaultProps(): any {
    return {
      placeholder: '',
      onPress: () => {/* */},
      minLength: 0,
      fetchDetails: false,
      autoFocus: false,
      getDefaultValue: () => '',
      timeout: 20000,
      onTimeout: () => console.warn('google places autocomplete: request timeout'),
      styles: {
      },
      textInputProps: {},
    };
  },

  getInitialState(): any {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      text: this.props.getDefaultValue(),
      dataSource: ds.cloneWithRows(this.props.source),
      listViewDisplayed: false,
    };
  },

  triggerFocus(): void {
    if (this.refs.textInput) this.refs.textInput.focus();
  },

  triggerBlur(): void {
    if (this.refs.textInput) this.refs.textInput.blur();
  },

  _onPress(rowData: any): void {
    this.setState({
        text: rowData,
      });
    this._onBlur();
  },

  _request(text: string): void {
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

  _onChangeText(text: string): void {
    this._request(text);
    this.setState({
      text: text,
      listViewDisplayed: true,
    });
  },

  _renderRow(rowData: any = {}): any {
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
              style={[{ flex: 1 }, defaultStyles.description, this.props.styles.description]}
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

  _onBlur(): void {
    this.triggerBlur();
    this.setState({listViewDisplayed: false});
  },

  _onFocus(): void {
    let { text } = this.state;
    if (text) {this._request(text); }
    this.setState({listViewDisplayed: true});
  },

  _getListView(): any {
    if (this.state.text !== '' && this.state.listViewDisplayed === true) {
      return (
        <ListView
          keyboardShouldPersistTaps={true}
          keyboardDismissMode="on-drag"
          style={[defaultStyles.listView, this.props.styles.listView]}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          automaticallyAdjustContentInsets={false}
          {...this.props}
        />
      );
    }
    return null;
  },
            //{ ...userProps } , ...userProps
  render(): any {
    let { onChangeText, onFocus } = this.props.textInputProps;
    return (
      <View
        style={[defaultStyles.container, this.props.styles.container]}
      >
        <View
          style={[defaultStyles.textInputContainer, this.props.styles.textInputContainer]}
        >
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={false}
            ref="textInput"
            autoFocus={this.props.autoFocus}
            style={[defaultStyles.textInput, this.props.styles.textInput]}
            onChangeText={onChangeText ? text => {this._onChangeText(text); onChangeText(text);} : this._onChangeText}
            value={this.state.text}
            placeholder={this.props.placeholder}
            onFocus={onFocus ? () => {this._onFocus(); onFocus();} : this._onFocus}
            clearButtonMode="while-editing"
          />
        </View>
        {this._getListView()}
      </View>
    );
  },
});

export default GooglePlacesAutocomplete;
