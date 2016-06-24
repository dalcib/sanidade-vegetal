import * as React from 'react';
import { Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Subheader, Ripple, Card } from 'react-native-material-design';

export default class Alertas extends Component <{},{}>{

    render() {
        return (
            <View  >
                <Subheader text="Alertas Fitossanitários"/>
                <Card>
                    <Card.Body>
                        <Text style={styles.welcome}>Texto texto texto.</Text>
                        <Text style={styles.instructions}>Texto texto texto.</Text>
                    </Card.Body>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create<any>({

});