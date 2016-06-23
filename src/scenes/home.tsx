import * as React from 'react'
import { Component} from 'react'
import {View, Text, Image, IntentAndroid, ScrollView } from 'react-native';
import { Card, Button, COLOR, TYPO } from 'react-native-material-design';

var theme = 'paperGreen'; 

export default class Home extends Component<{},{}> {
    render() {
        return (

              <ScrollView >
                <Card>

                    <Card.Media
                        image={<Image source={require('./../../assets/nav.jpg')} />}
                        overlay
                    >    
                        <Image source={require('./../../assets/logo.png')} resizeMode={'stretch'} />
                        <View>
                            <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>Sanidade Vegetal</Text>
                            <Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>Dapartamento de Sanidade Vegetal - DSV/MAPA</Text>
                        </View>
                    </Card.Media>
                    <Card.Body>
                        <Text>Consulta de dados sobre a Defesa Sanitária Vegetal do Brasil</Text>
                    </Card.Body>
                    <Card.Actions position="right">
                        <Button primary={theme} text="DSV" onPress={() => IntentAndroid.openURL('http://www.agricultura.gov.br/vegetal/sanidade-vegetal')} />
                    </Card.Actions>
                </Card>
                <Card>
                    <Card.Body>
                        <Text>Testo texto texto.</Text>
                    </Card.Body>
                
                    <Card.Media
                            image={<Image source={require('./../../assets/mapa.png')} resizeMode={'stretch'} />}
                        />
                </Card>
                <Button text="Início" primary={theme} onPress={() => { }} />
              </ScrollView>

        );
    }

}