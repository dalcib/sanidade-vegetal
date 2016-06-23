import * as React from 'react';
import {Component} from 'react';
import {Picker, StyleSheet} from 'react-native';
                
const Combo = ({source, itemLabel, itemValue, value, name, onValueChange}) => (
    <Picker
      style={styles.picker}
      selectedValue={value}
      onValueChange={(selectedValue)=> onValueChange({target: {name, value: selectedValue}})}
    >
        {source.map((option, i)=>{ 
          return (
          <Picker.Item 
            label={typeof option === 'string' ? option : option[itemLabel]} 
            value={typeof option === 'string' ? option : option[itemValue]}   
            key={i} 
          />
        )})}
    </Picker>
  )


const styles = StyleSheet.create<any>({
  picker: {
    width: 350,
    //flex: 1,
    backgroundColor: '#FFFFFF',



      color:'white',
      flex: 0.3,
      borderColor: 'black',
      alignSelf: 'flex-end',

  
  },
});

export default Combo;