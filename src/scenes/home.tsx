import * as React from 'react'
import { Component} from 'react'
import {View, Text, Image, Linking, ScrollView } from 'react-native';
import { Card, Button, COLOR, TYPO, Subheader } from 'react-native-material-design';

var theme = 'paperGreen'; 
//      <Image source={require('./../../assets/logo.png')} resizeMode={'stretch'} />

export default class Home extends Component<{},{}> {
    render() {
        return (

              <ScrollView >
                <Card>

                    <Card.Media
                        image={<Image source={require('./../../assets/nav.jpg')} />}
                        overlay
                    >   
                        <View>
                            <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>Sanidade Vegetal</Text>
                            <Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>Dapartamento de Sanidade Vegetal - DSV/MAPA</Text>
                        </View>
                    </Card.Media>
                    <Card.Body>
                        <Text>Consulta de dados sobre a Defesa Sanitária Vegetal do Brasil</Text>
                    </Card.Body>
                    <Card.Actions position="right">
                        <Button primary={theme} text="DSV" onPress={() => Linking.openURL('http://www.agricultura.gov.br/vegetal/sanidade-vegetal')} />
                    </Card.Actions>
                </Card>
                <Card>
                    <Card.Body>
                        <Subheader text="Novidades:"  />
                        <Text>Testo texto texto.</Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Text>Testo texto texto.</Text>
                    </Card.Body>
                
                    <Card.Media
                            image={<Image source={require('./../../assets/logo_mapa.png')} resizeMode={'stretch'}  style={{height: 250, width: null}} />}
                        />
                </Card>
                <Button text="Início" primary={theme} onPress={() => { }} />
              </ScrollView>

        );
    }

}