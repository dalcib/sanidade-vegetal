import * as React from 'react';
import { Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Subheader, Card } from 'react-native-material-design';

export default class Contato extends Component <{}, {}> {

    render(): any {
        return (
            <View  >
                <Subheader text="Contato"/>
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
