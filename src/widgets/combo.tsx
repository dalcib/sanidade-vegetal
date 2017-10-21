import * as React from 'react'; // tslint:disable-line:no-unused-variable
import {Picker, StyleSheet} from 'react-native';

const Combo = ({source, itemLabel, itemValue, value, name, onValueChange}) => (
    <Picker
      style={styles.picker}
      selectedValue={value}
      onValueChange={(selectedValue) => onValueChange({target: {name: name, value: selectedValue}})}
    >
        {source.map((option, i) => {
          return (
          <Picker.Item
            label={typeof option === 'string' ? option : option[itemLabel]}
            value={typeof option === 'string' ? option : option[itemValue]}
            key={i}
          />
        );})}
    </Picker>
  );

const styles = StyleSheet.create<any>({
  picker: {
    width: 300,
    flex: 1,
    backgroundColor: '#FFFFFF',
    color: 'black',
    //flex: 0.3,
    borderWidth: 10,
    borderColor: 'black',
    alignSelf: 'center',
    height: 10
  },
});

export default Combo;
