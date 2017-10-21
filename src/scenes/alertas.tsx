import * as React from 'react'; // tslint:disable-line:no-unused-variable
import { Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Subheader, Card } from 'react-native-material-design';

export default class Alertas extends Component <{}, {}> {

    render(): any {
        return (
            <View  >
                <Subheader text="Alertas Fitossanitários"/>
                <Card>
                    <View />
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
