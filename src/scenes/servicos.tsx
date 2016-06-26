import * as React from 'react';
import { Component} from 'react';
import {ScrollView, Text, StyleSheet, Linking} from 'react-native';
import { Subheader, Card, Button, TYPO, COLOR } from 'react-native-material-design';

var theme = 'paperGreen';

export default class Serviços extends Component <{},{}>{

    render() {
        return (
            <ScrollView style={styles.container} >

                <Card>
                    <Card.Body>
                        <Subheader text="Estações Quarentenárias" color={COLOR.paperGreen}  />
                        <Text style={styles.welcome}>Texto texto texto.</Text>
                        <Text style={styles.instructions}>Texto texto texto.</Text>
                        <Button primary={theme} text="Link" onPress={() => Linking.openURL('http://www.agricultura.gov.br/vegetal/sanidade-vegetal')} />
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Subheader text="Empresas de Tratamento Fitossanitário com Fins Quarentenárias" color={COLOR.paperGreen}   />
                        <Text style={styles.welcome}>Texto texto texto.</Text>
                        <Text style={styles.instructions}>Texto texto texto.</Text>
                        <Button primary={theme} text="Link" onPress={() => Linking.openURL('http://www.agricultura.gov.br/vegetal/sanidade-vegetal')} />
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Subheader text="Laboratórios da Rede Credenciada" color={COLOR.paperGreen}  />
                        <Text style={styles.welcome}>Texto texto texto.</Text>
                        <Text style={styles.instructions}>Texto texto texto.</Text>
                        <Button primary={theme} text="Link" onPress={() => Linking.openURL('http://www.agricultura.gov.br/vegetal/sanidade-vegetal')} />
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                            <Subheader text="Análise de Risco de Pragas" color={COLOR.paperGreen}  />
                        <Text style={styles.welcome}>Texto texto texto.</Text>
                        <Text style={styles.instructions}>Texto texto texto.</Text>
                        <Button primary={theme} text="Link" onPress={() => Linking.openURL('http://www.agricultura.gov.br/vegetal/sanidade-vegetal')} />
                    </Card.Body>
                </Card>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create<any>({
  container: {
    /*flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',*/
  },
  welcome: {
    /*fontSize: 20,
    textAlign: 'center',
    margin: 10,*/
  },
  instructions: {
    /*textAlign: 'center',
    color: '#333333',
    marginBottom: 5,*/
  },
});